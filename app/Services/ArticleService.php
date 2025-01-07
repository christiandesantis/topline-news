<?php

namespace App\Services;

use App\Models\Article;
use App\Dto\ArticleDto;

class ArticleService
{
    /**
     * Validate and save articles to the database.
     *
     * @param array $articles
     * @return array
     */
    public function saveArticles(array $articles): array
    {
        Article::validate($articles);

        $rowsAffected = 0;

        foreach ($articles as $article) {
            $this->upsert($article);
            $rowsAffected++;
        }

        return ['rowsAffected' => $rowsAffected];
    }

    /**
     * Create or update article implementing dto.
     *
     * @param ArticleDto $article
     * @return Article
     */
    public function upsert(ArticleDto $article): Article
    {
        return Article::updateOrCreate(
            [
                'title' => $article->title,
                'source_id' => $article->source_id,
            ],
            $article
        );
    }
}
