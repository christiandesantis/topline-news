<?php

namespace App\Dto;

readonly class SourceDto
{
    public function __construct(
        public string $uid,
        public string $name,
        public string $language,
        public string $country,
        public ?string $description,
        public ?string $url,
    ) {}
}
