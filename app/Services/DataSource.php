<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Article;
use App\Models\Source;

class DataSource
{
    /**
     * @var array<string> \App\Models\Category
     */
    protected $categories;

    /**
     * Initialize the categories property with all categories.
     */
    protected function __construct()
    {
        $this->categories = Category::all();
    }

    /**
     * Validate and save articles to the database.
     *
     * @param array $articles
     * @return array
     */
    protected function saveArticles(array $articles): array
    {
        Article::validate($articles);

        $rowsAffected = 0;

        foreach ($articles as $article) {

            Article::updateOrCreate(
                [
                    'title' => $article['title'],
                    'source_id' => $article['source_id'],
                ],
                $article
            );
            $rowsAffected++;
        }

        return ['rowsAffected' => $rowsAffected];
    }

    /**
     * Validate and save sources to the database.
     *
     * @param array $sources
     * @return array
     */
    protected function saveSources(array $sources): array
    {
        Source::validate($sources);

        $rowsAffected = 0;

        foreach ($sources as $source) {
            Source::updateOrCreate(['uid' => $source['uid']], $source);
            $rowsAffected++;
        }

        return ['rowsAffected' => $rowsAffected];
    }
}
