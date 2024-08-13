<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pays;
use Illuminate\Http\Request;

class PaysController extends Controller
{
    public function index(){
        try {
            $pays = Pays::all();
            return response()->json($pays);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
