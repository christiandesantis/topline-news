<?php

namespace App\Dto;

readonly class ArticleDto
{
    public function __construct(
        public string $title,
        public string $source_id,
        public string $category,
        public string $url,
        public string $publishedAt,
        public ?string $author,
        public ?string $description,
        public ?string $content,
        public ?string $urlToImage,
    ) {}
}
