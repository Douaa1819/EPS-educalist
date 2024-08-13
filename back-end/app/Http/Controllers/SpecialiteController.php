<?php

namespace App\Http\Controllers;

use App\Models\Specialite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SpecialiteController extends Controller
{
    public function index()
    {
        $specialites = DB::table('specialite')->get();

        return response()->json($specialites);
    }

    // Add this method to your SpecialiteController
public function store(Request $request)
{
    $specialite = new Specialite();
    $specialite->name = $request->name;
    $specialite->save();
    return response()->json($specialite, 201); // 201 Created status
}


    public function update(Request $request, $id)
{
    $specialite = Specialite::find($id);
    if ($specialite) {
        $specialite->name = $request->name;
        $specialite->save();
        return response()->json($specialite);
    } else {
        return response()->json(['message' => 'Specialite not found'], 404);
    }
}


    public function destroy($id)
{
    $specialite = Specialite::find($id);
    if ($specialite) {
        $specialite->delete();
        return response()->json(['message' => 'Specialite deleted successfully']);
    } else {
        return response()->json(['message' => 'Specialite not found'], 404);
    }
}

}

