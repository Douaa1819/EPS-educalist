<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all(['id', 'firstName', 'lastName', 'email', 'role']);
        return response()->json($users);
    }

    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'role' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        $validatedData['password'] = Hash::make($validatedData['password']);

        $user = User::create($validatedData);

        return response()->json($user, 201);
    }

 
    public function show()
    {
        return response()->json(Auth::user());
    }


    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'location' => 'nullable|string|max:255',
        ]);

        $user->update($validated);

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user
        ]);
    }

    public function updatePassword(Request $request)
{
    $request->validate([
        'current_password' => 'required',
        'password' => 'required|string|min:8|confirmed',
    ]);

    $user = Auth::user();

    if (!Hash::check($request->current_password, $user->password)) {
        return response()->json(['message' => 'Current password is incorrect'], 400);
    }

    $user->password = Hash::make($request->password);
    $user->save();

    return response()->json(['message' => 'Password updated successfully']);
}


    public function destroy()
    {

        $user = Auth::user();
        /** @disregard P1013 [tokens function exists and working] **/
        $user->tokens()->delete();
        $user->delete();

        return response()->json(['message' => 'Account deleted successfully']);
    }

    public function search(Request $request)
    {
        $term = $request->query('term');
        $role = $request->query('role', 'all');

        $query = User::where(function($q) use ($term) {
            $q->where('firstName', 'LIKE', "%{$term}%")
              ->orWhere('lastName', 'LIKE', "%{$term}%")
              ->orWhere('email', 'LIKE', "%{$term}%");
        });

        if ($role !== 'all') {
            $query->where('role', $role);
        }

        $users = $query->with(['etudiant', 'redacteur', 'admin'])
            ->get()
            ->map(function ($user) {
                $roleSpecific = $user->etudiant ?? $user->redacteur ?? $user->admin;
                return [
                    'id' => $roleSpecific ? $roleSpecific->id : $user->id,
                    'user' => [
                        'firstName' => $user->firstName,
                        'lastName' => $user->lastName,
                        'email' => $user->email,
                    ],
                    'is_banned' => $roleSpecific ? $roleSpecific->is_banned : false,
                    'role' => $user->role,
                ];
            });

        return response()->json($users);
    }

    public function getUser(Request $request)
    {
     Log::info('Request authenticated:', ['user' => $request->user()]);
        $user = Auth::user();
    
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    
        return response()->json($user);
    }
    

}