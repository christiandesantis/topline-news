<?php

namespace App\Models;

class Category
{
    public const CATEGORIES = [
        'general',
        'business',
        'entertainment',
        'health',
        'science',
        'sports',
        'technology',
    ];

    /**
     * Get all categories.
     *
     * @return array<string>
     */
    public static function all(): array
    {
        return self::CATEGORIES;
    }

    /**
     * Check if a category exists.
     *
     * @param string $category
     * @return bool
     */
    public static function exists(string $category): bool
    {
        return in_array($category, self::CATEGORIES, true);
    }

    /**
     * Get a specific category by name.
     *
     * @param string $category
     * @return string|null
     */
    public static function get(string $category): ?string
    {
        return self::exists($category) ? $category : null;
    }
};
