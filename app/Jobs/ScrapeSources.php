<?php

namespace App\Jobs;

use \App\Services\NewsApi;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ScrapeSources implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        NewsApi $newsApi,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->newsApi->syncSources();
    }
}
