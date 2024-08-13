<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Admin;
use App\Models\Etudiant;
use App\Models\Redacteur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StatistiqueController extends Controller
{
    public function statistique()
    {
        $user = User::count();
        $redacteur = Redacteur::count();
        $admin = Admin::count();
        $etudiant = Etudiant::count();

        return response()->json([
            'users' => $user,
            'redacteurs' => $redacteur,
            'admins' => $admin,
            'etudiants' => $etudiant,
        ]);
    }



   
        public function show()
        {
            $user = Auth::user();
    
            if (!$user) {
                return response()->json(['error' => 'User not authenticated'], 401);
            }
    
            $role = $user->role ? $user->role : 'undefined';
    
            return response()->json([
                'first_name' => $user->firstName,
                'last_name' => $user->lastName,
                'role' => $role,
            ]);
        }
    }