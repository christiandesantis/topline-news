<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class Source extends Model
{
    protected $fillable = [
        'uid', 'name', 'description', 'url', 'language', 'country'
    ];

    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }

    /**
     * Validate source data
     *
     * @param array $sources
     * @throws ValidationException
     */
    public static function validate(array $sources): void
    {
        $validator = Validator::make(['sources' => $sources], [
            'sources.*.uid' => 'required|string|unique:sources,uid',
            'sources.*.name' => 'required|string',
            'sources.*.language' => 'required|string',
            'sources.*.country' => 'required|string',
            'sources.*.description' => 'nullable|string',
            'sources.*.url' => 'nullable|url',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
}
