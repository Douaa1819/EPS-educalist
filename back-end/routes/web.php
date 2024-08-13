<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\WebhookController;
use App\Http\Controllers\FacebookController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\StatistiqueController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\ForgotPasswordController;

Route::get('/', function () {
    return view('welcome');
});

// routes/web.php ou routes/api.php




Route::get('/auth/google', [GoogleAuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);
Route::post('/auth/facebook/callback', [FacebookController::class, 'authenticateWithFacebook']);
Route::post('/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscribe');
Route::get('/send-test-mail', [NewsletterController::class, 'sendTestMail']);
Route::get('/test', [NewsletterController::class, 'index']);
// Route::post('/subscribe', [NewsletterController::class, 'subscribe']);
Route::post('/webhook/mailcoach', [WebhookController::class, 'handleSubscription']);

Route::resource('permissions', PermissionController::class);
Route::resource('roles', RoleController::class);
// routes/web.php
// Auth::routes();

