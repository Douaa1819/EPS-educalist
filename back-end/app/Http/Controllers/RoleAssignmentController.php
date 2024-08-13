<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Redacteur;
use App\Models\Etudiant;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RoleAssignmentController extends Controller
{
    public function index()
    {
        $authUser = Auth::user();
        if (!$authUser) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        if ($authUser->role !== 'super admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $users = User::where('role', '!=', 'super admin')
        ->select('id', 'firstName', 'lastName', 'email', 'role')
        ->get();
        return response()->json($users);
    }

    public function assignRole(Request $request, $id)
    {
        $authUser = Auth::user();
        if (!$authUser) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        if ($authUser->role !== 'super admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'role' => 'required|in:redacteur,etudiant,admin',
        ]);

        DB::transaction(function () use ($user, $validatedData) {
            // Remove from previous role table
            Redacteur::where('user_id', $user->id)->delete();
            Etudiant::where('user_id', $user->id)->delete();
            Admin::where('user_id', $user->id)->delete();
       
            // Assign new role
            $user->role = $validatedData['role'];
            $user->save();

            // Add to new role table
            switch ($validatedData['role']) {
                case 'redacteur':
                    Redacteur::create(['user_id' => $user->id]);
                    break;
                case 'etudiant':
                    Etudiant::create(['user_id' => $user->id]);
                    break;
                case 'admin':
                    Admin::create(['user_id' => $user->id]);
                    break;
            }
        });

        return response()->json($user);
    }
}
