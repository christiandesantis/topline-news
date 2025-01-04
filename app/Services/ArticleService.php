<?php

namespace App\Services;

use App\Models\Article;

class ArticleService
{
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
}
