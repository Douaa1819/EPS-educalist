<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Etudiant;
use Illuminate\Http\Request;

class EtudiantsController extends Controller
{
    public function index()
    {
        
        $etudiants = Etudiant::with('user')->get();

        return response()->json($etudiants);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'is_banned' => 'required|boolean',
        ]);
    
        $etudiant = Etudiant::findOrFail($id);
        $etudiant->is_banned = $request->is_banned;
        $etudiant->save();
    
        return response()->json($etudiant);
    }
}
