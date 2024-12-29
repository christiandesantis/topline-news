<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    /**
     * Display all articles paginated
     */
    public function index(Request $request): Response
    {
        $query = Article::query();

        if ($search = $request->query('search')) {
            $searchTerms = explode(' ', $search);
            $query->where(function($q) use ($searchTerms) {
                foreach ($searchTerms as $term) {
                    $q->orWhere('title', 'like', "%{$term}%")
                      ->orWhere('description', 'like', "%{$term}%")
                      ->orWhere('category', 'like', "%{$term}%");
                }
            });
        }

        $articles = $query->latest('publishedAt')->paginate(9);

        return Inertia::render('Dashboard', [
            'articlesPaginated' => $articles,
        ]);
    }
}
