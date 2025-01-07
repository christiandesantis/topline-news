<?php

namespace App\Clients;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Dto\ArticleDto;
use App\Dto\SourceDto;

class NewsApi extends DataSource
{
    /**
     * @var string Base URL for the News API
     */
    protected $baseUrl = 'https://newsapi.org/v2';

    /**
     * @var string URL for fetching sources
     */
    protected $sourcesUrl;

    /**
     * @var string URL for fetching articles
     */
    protected $articlesUrl;

    /**
     * @var string API key for authenticating requests
     */
    private $apiKey;

    /**
     * @var array Request headers for the API requests
     */
    private $reqHeaders;

    /**
     * Initialize the NewsApi instance.
     */
    public function __construct()
    {
        parent::__construct();
        $this->sourcesUrl = "{$this->baseUrl}/top-headlines/sources";
        $this->articlesUrl = "{$this->baseUrl}/top-headlines";
        $this->apiKey = env('NEWS_API_KEY');
        $this->reqHeaders = ['X-Api-Key' => $this->apiKey];
    }

    /**
     * Synchronize sources from NewsAPI.
     */
    public function syncSources(): void
    {
        Log::info('Syncing sources');
        $sources = $this->fetchSources();
        // Normalize sources data for model validation
        $normalizedSources = $this->normalizeSources($sources);
        $result = $this->sourceService->saveSources($normalizedSources);
        Log::info('Rows affected: ' . $result['rowsAffected']);
    }

    /**
     * Fetch sources from NewsAPI.
     *
     * @return array
     */
    private function fetchSources(): array
    {
        $response = Http::withHeaders($this->reqHeaders)->get($this->sourcesUrl);

        if ($response->failed()) {
            Log::error('Failed to fetch sources from News API');
            return [];
        }

        $data = $response->json();
        return $data['sources'];
    }

    /**
     * Synchronize articles by categories.
     */
    public function syncArticlesByCategories(): void
    {
        foreach ($this->categories as $category) {
            Log::info('Syncing articles for category: ' . $category);
            $result = $this->syncArticlesByCategory($category);
            Log::info('Rows affected: ' . $result['rowsAffected']);
        }
    }

    /**
     * Synchronize articles for a specific category.
     *
     * @param string $category
     * @return array
     */
    public function syncArticlesByCategory(string $category): array
    {
        $articles = $this->fetchAllArticlePages(['category' => $category]);
        // Filter out articles that do not contain source id
        $filteredArticles = array_filter($articles, function ($article) {
            return isset($article['source']['id']) && !empty($article['source']['id']);
        });
        // Normalize articles data for model validation
        $normalizedArticles = $this->normalizeArticles($filteredArticles, $category);
        return $this->articleService->saveArticles($normalizedArticles);
    }

    /**
     * Fetch articles of all pages from NewsAPI.
     *
     * @param array $params
     * @return array
     */
    private function fetchAllArticlePages(array $params = []): array
    {
        $allArticles = [];
        $page = 0;
        $pageSize = 100;

        do {
            $page++;
            list('articles' => $articles, 'totalResults' => $totalResults) = $this->fetchArticles(
                array_merge(
                    $params,
                    [
                        'pageSize' => $pageSize,
                        'page' => $page,
                    ]
                )
            );
            $allArticles = array_merge($allArticles, $articles);
        } while ($page * $pageSize < $totalResults);

        return $allArticles;
    }

    /**
     * Fetch articles from NewsAPI.
     *
     * @param array $params
     * @return array
     */
    private function fetchArticles(array $params = []): array
    {
        $response = Http::withHeaders($this->reqHeaders)->get($this->articlesUrl, $params);

        if ($response->failed()) {
            Log::error('Failed to fetch articles from News API');
            return [];
        }

        $data = $response->json();

        return [
            'totalResults' => $data['totalResults'],
            'articles' =>$data['articles']
        ];
    }

    /**
     * Normalize sources data for model validation.
     *
     * @param array $sources
     * @return array
     */
    private function normalizeSources(array $sources): array
    {
        return array_map(function ($source) {
            return new SourceDto(
                uid: $source['id'],
                name: $source['name'],
                description: $source['description'],
                url: $source['url'],
                language: $source['language'],
                country: $source['country'],
            );
        }, $sources);
    }

    /**
     * Normalize articles data for model validation.
     *
     * @param array $articles
     * @param string $category
     * @return array
     */
    private function normalizeArticles(array $articles, string $category): array
    {
        return array_map(function ($article) use ($category) {
            // Map source id to the local source id
            $source_id = $this->sourceService->mapSourceId($article['source']['id']);
            // Skip articles with unknown source id
            if (is_null($source_id)) return $source_id;
            return new ArticleDto(
                title: $article['title'],
                source_id: $source_id,
                category: $category,
                url: $article['url'],
                publishedAt: $article['publishedAt'],
                author: $article['author'] ?? 'Unknown',
                description: $article['description'],
                content: $article['content'],
                urlToImage: $article['urlToImage'],
            );
        }, $articles);
    }
}
