<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Metier;
use App\Models\Specialite;
use App\Models\Domaine;

class OptionController extends Controller
{
    public function getMetiers()
    {
        try {
            $metiers = Metier::all();
            return response()->json($metiers);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getSpecialites()
    {
        try {
            $specialites = Specialite::all();
            return response()->json($specialites);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getDomaines()
    {
        try {
            $domaines = Domaine::all();
            return response()->json($domaines);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}