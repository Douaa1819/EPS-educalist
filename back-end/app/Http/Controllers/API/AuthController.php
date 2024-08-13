<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Models\Admin;

use App\Models\Etudiant;
use App\Models\Redacteur;
use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens; 
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller


{
 
    public function createUser(Request $request)
    {
        Log::info('Request data: ', $request->all());
    
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'location' => 'nullable|string',
            'role' => 'required|string|in:admin,redacteur,etudiant',
        ]);
    
        $user = User::create([
            'firstName' => $validatedData['firstName'],
            'lastName' => $validatedData['lastName'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'location' => $validatedData['location'],
            'role' => $validatedData['role'],
        ]);
    
        // Create role-specific entry
        switch ($validatedData['role']) {
            case 'admin':
                Admin::create(['user_id' => $user->id]);
                break;
            case 'redacteur':
                Redacteur::create(['user_id' => $user->id]);
                break;
            case 'etudiant':
                Etudiant::create(['user_id' => $user->id]);
                break;
        }
    
        $token = $user->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
        ]);
    }

    
    

    public function login(LoginRequest $request)
    {
        try {
            $credentials = $request->only('email', 'password');
            $remember = $request->input('remember_me', false); 
    
            if (!Auth::attempt($credentials, $remember)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }
    
            $user = User::where('email', $request->email)->first();
    
            if ($user->role === 'redacteur') {
                $redacteur = Redacteur::where('user_id', $user->id)->first();
                if ($redacteur && $redacteur->is_banned) {
                    Auth::logout();
                    return response()->json([
                        'message' => 'User is banned.',
                    ], 403);
                }
            } elseif ($user->role === 'etudiant') {
                $etudiant = Etudiant::where('user_id', $user->id)->first();
                if ($etudiant && $etudiant->is_banned) {
                    Auth::logout();
                    return response()->json([
                        'message' => 'User is banned.',
                    ], 403);
                }
            } elseif ($user->role === 'admin') {
                $admin = Admin::where('user_id', $user->id)->first();
                if ($admin && $admin->is_banned) {
                    Auth::logout();
                    return response()->json([
                        'message' => 'User is banned.',
                    ], 403);
                }
            }
    
            $token = $user->createToken('authToken')->plainTextToken;
    
            $role = $user->role;
            $redirectTo = ($role === 'etudiant') ? '/' : '/dashboard';
    
            return response()->json([
                'message' => 'Connected Successfully',
                'token' => $token,
                'role' => $role,
                'redirectTo' => $redirectTo
            ]);
    
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors()
            ], 422);
    
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Login Failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    

    public function logout(Request $request)
    {
        /** @disregard P1013 [tokens function exists and working] **/
        try {
            if ($request->user()) {
                $request->user()->tokens()->delete();
            }
            return response()->json(['message' => 'Logged out'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred during logout: ' . $e->getMessage()], 500);
        }
    }
}