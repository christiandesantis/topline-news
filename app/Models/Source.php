<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    protected $fillable = [
        'uid', 'name', 'description', 'url', 'language', 'country'
    ];

    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }
}
