<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display latest articles.
     */
    public function index(Request $request): Response
    {
        $articles = Article::latest('publishedAt')->take(20)->get();

        return Inertia::render('Welcome', [
            'articles' => $articles,
        ]);
    }
}
