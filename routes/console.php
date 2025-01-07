<?php

use App\Clients\NewsApi;
use App\Jobs\ScrapeArticles;
use App\Jobs\ScrapeSources;
use Illuminate\Support\Facades\Schedule;

$newsApi = new NewsApi();

Schedule::job(new ScrapeSources($newsApi))->twiceDaily(0, 12);

Schedule::job(new ScrapeArticles($newsApi))->cron('0 */8 * * *');
