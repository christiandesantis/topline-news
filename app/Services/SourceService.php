<?php

namespace App\Services;

use App\Models\Source;
use App\Dto\SourceDto;

class SourceService
{
    /**
     * Validate and save sources to the database.
     *
     * @param array $sources
     * @return array
     */
    public function saveSources(array $sources): array
    {
        Source::validate($sources);

        $rowsAffected = 0;

        foreach ($sources as $source) {
            $this->upsert($source);
            $rowsAffected++;
        }

        return ['rowsAffected' => $rowsAffected];
    }

    public function upsert(SourceDto $sourceDto): Source
    {
        return Source::updateOrCreate(
            ['uid' => $sourceDto->uid],
            $sourceDto
        );
    }

    /**
     * Map source UID to source ID.
     *
     * @param string $uid
     * @return int|null
     */
    public function mapSourceId(string $uid): ?int
    {
        $source = Source::where('uid', $uid)->first();
        return $source ? $source->id : null;
    }
}
