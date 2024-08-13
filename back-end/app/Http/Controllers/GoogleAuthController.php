<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Kreait\Laravel\Firebase\Facades\Firebase;

class GoogleAuthController extends Controller
{
    public function redirectToGoogle()
    {
        return redirect()->away('https://accounts.google.com/o/oauth2/v2/auth?' . http_build_query([
            'client_id' => env('GOOGLE_CLIENT_ID'),
            'redirect_uri' => env('GOOGLE_REDIRECT_URI'),
            'response_type' => 'code',
            'scope' => 'openid profile email',
            'access_type' => 'offline',
            'prompt' => 'consent',
        ]));
    }

    public function handleGoogleCallback(Request $request)
    {
        try {
            $auth = Firebase::auth();
            $idToken = $request->input('id_token');
            $firebaseUser = $auth->verifyIdToken($idToken);

            $user = User::updateOrCreate(
                ['google_id' => $firebaseUser->claims()['sub']],
                [
                    'firstName' => $firebaseUser->claims()['name'] ?? '',
                    'email' => $firebaseUser->claims()['email'],
                    'google_id' => $firebaseUser->claims()['sub'],
                ]
            );

            Auth::login($user);

            return response()->json(['message' => 'Authenticated successfully', 'user' => $user]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
}