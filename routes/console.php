<?php

use App\Jobs\ScrapeArticles;
use App\Jobs\ScrapeSources;
use Illuminate\Support\Facades\Schedule;

Schedule::job(new ScrapeSources)->twiceDaily(0, 12);

Schedule::job(new ScrapeArticles)->cron('0 */8 * * *');
