<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Redacteur;
use Illuminate\Http\Request;

class RedacteursController extends Controller
{public function index()
    {
        $redacteurs = Redacteur::with('user')->get();
        return response()->json($redacteurs);
    }
    
    public function update(Request $request, $id)
{
    $request->validate([
        'is_banned' => 'required|boolean',
    ]);

    $redacteur = Redacteur::findOrFail($id);
    $redacteur->is_banned = $request->is_banned;
    $redacteur->save();

    return response()->json($redacteur);
}

}    