<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Models\Category;

class Article extends Model
{
    protected $fillable = [
        'source_id', 'category', 'author', 'title', 'description', 'content', 'url', 'urlToImage', 'publishedAt'
    ];

    public function source(): BelongsTo
    {
        return $this->belongsTo(Source::class);
    }

    // Cast the publishedAt attribute to a date
    protected $casts = [
        'publishedAt' => 'date',
    ];

    /**
     * Validate articles data
     *
     * @param array $articles
     * @throws ValidationException
     */
    public static function validate(array $articles): void
    {
        $validator = Validator::make(['articles' => $articles], [
            'articles.*.title' => 'required|string',
            'articles.*.source_id' => 'required|integer',
            'articles.*.category' => [
                'required',
                'string',
                function ($attribute, $value, $fail) {
                    if (!Category::exists($value)) {
                        $fail("The selected category ($value) is invalid.");
                    }
                },
            ],
            'articles.*.url' => 'required|string',
            'articles.*.publishedAt' => 'required|date',
            'articles.*.author' => 'nullable|string',
            'articles.*.description' => 'nullable|string',
            'articles.*.content' => 'nullable|string',
            'articles.*.urlToImage' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
}
