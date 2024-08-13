<?php

// EtudeController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etude;
use Illuminate\Support\Facades\Log;

class EtudeController extends Controller
{
    public function filter(Request $request)
    {
        try {
            $query = Etude::query();

            if ($request->has('user_id')) {
                $query->where('user_id', $request->input('user_id'));
            }

            if ($request->has('pays_id')) {
                $query->where('pays_id', $request->input('pays_id'));
            }

            if ($request->has('domaine_id')) {
                $query->where('domaine_id', $request->input('domaine_id'));
            }

            if ($request->has('metier_id')) {
                $query->where('metier_id', $request->input('metier_id'));
            }

            if ($request->has('specialite_id')) {
                $query->where('specialite_id', $request->input('specialite_id'));
            }

            // Eager load pays relationship
            $query->with('pays');

            // Log the raw SQL query for debugging purposes
            Log::info('SQL Query:', ['query' => $query->toSql(), 'bindings' => $query->getBindings()]);

            $etudes = $query->get();

            return response()->json($etudes);
        } catch (\Exception $e) {
            // Log detailed error information
            Log::error('Error filtering etudes: ' . $e->getMessage(), [
                'exception' => $e,
                'request' => $request->all(),
            ]);

            // Return more detailed error information in development
            if (config('app.debug')) {
                return response()->json(['error' => $e->getMessage()], 500);
            }

            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
