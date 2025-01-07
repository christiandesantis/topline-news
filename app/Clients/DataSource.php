<?php

namespace App\Clients;

use App\Models\Category;
use App\Models\Article;
use App\Models\Source;
use App\Services\ArticleService;
use App\Services\SourceService;

class DataSource
{
    /**
     * @var array<string> \App\Models\Category
     */
    protected $categories;

    /**
     * @var \App\Services\ArticleService
     */
    protected $articleService;

    /**
     * @var \App\Services\SourceService
     */
    protected $sourceService;

    /**
     * Initialize
     */
    protected function __construct()
    {
        $this->categories = Category::all();
        $this->articleService = new ArticleService();
        $this->sourceService = new SourceService();
    }
}
