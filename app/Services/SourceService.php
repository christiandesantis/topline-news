<?php

namespace App\Services;

use App\Models\Source;

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
            Source::updateOrCreate(['uid' => $source['uid']], $source);
            $rowsAffected++;
        }

        return ['rowsAffected' => $rowsAffected];
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
