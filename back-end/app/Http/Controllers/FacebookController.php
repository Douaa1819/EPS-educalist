<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class FacebookController extends Controller
{
    public function authenticateWithFacebook(Request $request)
    {
        $token = $request->input('token');

        $response = Http::get("https://graph.facebook.com/v12.0/me", [
            'fields' => 'id,name,email',
            'access_token' => $token,
        ]);

        if ($response->successful()) {
            $facebookUser = $response->json();
            $nameParts = explode(' ', $facebookUser['name']);
            $firstName = $nameParts[0];
            $lastName = isset($nameParts[1]) ? $nameParts[1] : '';

            $user = User::updateOrCreate(
                ['facebook_id' => $facebookUser['id']],
                [
                    'firstName' => $firstName,
                    'lastName' => $lastName,
                    'email' => $facebookUser['email'],
                    'facebook_id' => $facebookUser['id'],
                ]
            );

            Auth::login($user);

            return response()->json(['message' => 'Authenticated successfully', 'user' => $user]);
        }

        return response()->json(['error' => 'Authentication failed'], 401);
    }
}
