<?php

namespace App\Providers;

use UserRepository;

use Illuminate\Support\ServiceProvider;
use App\Repositories\NewsRepositoryInterface;
use App\Repositories\NewsRepository;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */

    
    public function register()
    {
        $this->app->bind(NewsRepositoryInterface::class, NewsRepository::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }
}
