<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PaysController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EtudeController;
use App\Http\Controllers\AdminsController;
use App\Http\Controllers\DomainController;
use App\Http\Controllers\MetierController;
use App\Http\Controllers\OptionController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\EtudiantsController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RedacteursController;
use App\Http\Controllers\SpecialiteController;
use App\Http\Controllers\StatistiqueController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\RoleAssignmentController;

use App\Http\Controllers\Auth\ForgotPasswordController;

// Routes requiring authentication
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users/roles', [RoleAssignmentController::class, 'index']);
    Route::post('/roles/{id}', [RoleAssignmentController::class, 'assignRole']);
    // Route::get('/user', [UserController::class, 'show']);
    Route::get('/users/search', [UserController::class, 'search']);


});

//edite profile



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', [UserController::class, 'show']);
    Route::put('/user', [UserController::class, 'update']);
    Route::put('/user/password', [UserController::class, 'updatePassword']);
    Route::delete('/user', [UserController::class, 'destroy']);
});




// Authenticated user route
Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'show']);


//  ADD User routes
Route::get('/userss', [UserController::class, 'index']);
Route::post('/userss', [UserController::class, 'store']);
//////////////////////////////////////
// Admin routes
Route::get('/admins', [AdminsController::class, 'index']);
Route::put('/admins/{id}', [AdminsController::class, 'update']);

// Redacteur routes
Route::get('/redacteurs', [RedacteursController::class, 'index']);
Route::put('/redacteurs/{id}', [RedacteursController::class, 'update']);

// Etudiant routes
Route::get('/etudiants', [EtudiantsController::class, 'index']);
Route::put('/etudiants/{id}', [EtudiantsController::class, 'update']);

Route::post('forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']);


Route::apiResource('news', NewsController::class);
Route::get('news/type/{type}', [NewsController::class, 'filterByType']);
Route::post('news/search', [NewsController::class, 'search']);
Route::post('/subscribe', [NewsController::class, 'subscribe']);

// Auth routes
Route::post('/register', [AuthController::class, 'createUser']);
Route::post('/login', [AuthController::class, 'login']);

// Subscription routes
Route::post('/subscribe', [SubscriptionController::class, 'subscribe']);

// Route::post('/subscribe', [NewsletterController::class, 'subscribe']);
// Route::post('/unsubscribe', [NewsletterController::class, 'unsubscribe']);
// Route::post('/delete-subscriber', [NewsletterController::class, 'deleteSubscriber']);
// Route::post('/get-subscriber-info', [NewsletterController::class, 'getSubscriberInfo']);
// Route::post('/check-subscription-status', [NewsletterController::class, 'checkSubscriptionStatus']);
// Route::post('/has-member', [NewsletterController::class, 'hasMember']);

Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::put('/articles/{id}', [ArticleController::class, 'update']);
Route::delete('/articles/{id}', [ArticleController::class, 'destroy']);
Route::post('/upload-image', [ArticleController::class, 'uploadImage']);

// Pays routes
Route::get('/pays', [PaysController::class, 'index']);

// Option routes
Route::get('/metiers', [OptionController::class, 'getMetiers']);
Route::get('/specialites', [OptionController::class, 'getSpecialites']);
Route::get('/domaines', [OptionController::class, 'getDomaines']);

// Etude routes
Route::get('/filter-etudes', [EtudeController::class, 'filter']);

// subsecribers routes
Route::get('/subscribers', [SubscriptionController::class , 'allSubsecribers']);
Route::post('subscribers/store', [SubscriptionController::class, 'store']);
Route::get('subscribers/{id}', [SubscriptionController::class, 'show']);
Route::put('subscribers/{id}', [SubscriptionController::class, 'update']);
Route::delete('subscribers/{id}', [SubscriptionController::class, 'destroy']);

//filter
Route::get('/domains', [DomainController::class, 'index']);
Route::get('/specialites', [SpecialiteController::class, 'index']);
Route::get('/metiers', [MetierController::class, 'index']);
Route::delete('/domains/{id}', [DomainController::class, 'destroy']);
Route::delete('/specialites/{id}', [SpecialiteController::class, 'destroy']);
Route::delete('/metiers/{id}', [MetierController::class, 'destroy']);
Route::put('/domains/{id}', [DomainController::class, 'update']);
Route::put('/specialites/{id}', [SpecialiteController::class, 'update']);
Route::put('/metiers/{id}', [MetierController::class, 'update']);
Route::post('/domains', [DomainController::class, 'store']);
Route::post('/specialites', [SpecialiteController::class, 'store']);
Route::post('/metiers', [MetierController::class, 'store']);

Route::get('/users', [PermissionController::class, 'getUsers']);
Route::get('/roles', [PermissionController::class, 'getRoles']);
Route::get('/permissions', [PermissionController::class, 'getPermissions']);

Route::get('/user-permissions', [PermissionController::class, 'getUserPermissions']);


Route::post('/assign-role-permissions', [PermissionController::class, 'assignRolePermissions']);
Route::post('/assign-user-permissions', [PermissionController::class, 'assignUserPermissions']);

Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/statistique', [StatistiqueController::class, 'statistique']);
Route::middleware('auth:sanctum')->get('/show', [StatistiqueController::class, 'show']);
Route::get('/search/users', [PermissionController::class, 'search']);



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users/roles', [RoleAssignmentController::class, 'index']);
    Route::post('/roles/{id}', [RoleAssignmentController::class, 'assignRole']);
    // Route::get('/user', [UserController::class, 'show']);
    Route::get('/users/search', [UserController::class, 'search']);


});

//edite profile



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'show']);
    Route::put('/user', [UserController::class, 'update']);
    Route::put('/user/password', [UserController::class, 'updatePassword']);
    Route::delete('/user', [UserController::class, 'destroy']);
});






Route::get('/admins', [AdminsController::class, 'index']);
Route::put('/admins/{id}', [AdminsController::class, 'update']);

Route::get('/redacteurs', [RedacteursController::class, 'index']);
Route::put('/redacteurs/{id}', [RedacteursController::class, 'update']);

Route::get('/etudiants', [EtudiantsController::class, 'index']);
Route::put('/etudiants/{id}', [EtudiantsController::class, 'update']);

Route::post('/forgot-password', [PasswordResetController::class, 'forgotPassword']);
Route::post('/reset-password', [PasswordResetController::class, 'resetPassword']);

Route::apiResource('news', NewsController::class);

Route::get('news/type/{type}', [NewsController::class, 'filterByType']);
Route::post('news/search', [NewsController::class, 'search']);

Route::post('/subscribe', [NewsController::class, 'subscribe']);



Route::post('/register', [AuthController::class, 'createUser']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/subscribe', [SubscriptionController::class, 'subscribe']);



Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::put('/articles/{id}', [ArticleController::class, 'update']);
Route::delete('/articles/{id}', [ArticleController::class, 'destroy']);

Route::get('/pays', [PaysController::class, 'index']);



Route::get('password/reset', 'App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');




Route::get('/users', [PermissionController::class, 'getUsers']);
Route::get('/roles', [PermissionController::class, 'getRoles']);
Route::get('/permissions', [PermissionController::class, 'getPermissions']);

Route::middleware('auth:sanctum')->get('/user-permissions', [PermissionController::class, 'getUserPermissions']);


Route::post('/assign-role-permissions', [PermissionController::class, 'assignRolePermissions']);
Route::post('/assign-user-permissions', [PermissionController::class, 'assignUserPermissions']);

Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/statistique', [StatistiqueController::class, 'statistique']);
Route::middleware('auth:sanctum')->get('/show', [StatistiqueController::class, 'show']);
Route::get('/search/users', [PermissionController::class, 'search']);


//pour la festion des permission
Route::middleware('auth:sanctum')->group(function () {
   
    Route::get('/permissionss', [PermissionController::class, 'index']);

    Route::post('/permissions', [PermissionController::class, 'store']);

    Route::put('/permissions/{id}', [PermissionController::class, 'update']);

    Route::delete('/permissions/{id}', [PermissionController::class, 'destroy']);
});


//news 
Route::post('/news', [NewsController::class, 'store']);
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{id}', [NewsController::class, 'show']);
Route::get('/related-news', [NewsController::class, 'relatedNews']);
Route::get('/popular-posts', [NewsController::class, 'popularPosts']);
Route::get('/filter', [NewsController::class, 'filter']);
Route::get('/search', [NewsController::class, 'search']);
