<?php

namespace App\Http\Controllers;

use App\Models\Metier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MetierController extends Controller
{
    public function index()
    {
        
         $metiers = DB::table('Metier')->get();
        return response()->json($metiers);
    }

    // Add this method to your MetierController
public function store(Request $request)
{
    $metier = new Metier();
    $metier->name = $request->name;
    $metier->save();
    return response()->json($metier, 201); // 201 Created status
}


    public function update(Request $request, $id)
{
    $metier = Metier::find($id);
    if ($metier) {
        $metier->name = $request->name;
        $metier->save();
        return response()->json($metier);
    } else {
        return response()->json(['message' => 'Metier not found'], 404);
    }
}

    public function destroy($id)
{
    $metier = Metier::find($id);
    if ($metier) {
        $metier->delete();
        return response()->json(['message' => 'Metier deleted successfully']);
    } else {
        return response()->json(['message' => 'Metier not found'], 404);
    }
}

}
