<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
