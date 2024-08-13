<?php

namespace App\Http\Controllers;

use App\Models\Domaine;
use Illuminate\Http\Request;

class DomainController extends Controller
{
    public function index()
    {
        $domains = Domaine::all();
        return response()->json($domains);
    }
    public function store(Request $request)
{
    $domain = new Domaine();
    $domain->name = $request->name;
    $domain->save();
    return response()->json($domain, 201); // 201 Created status
}

    public function update(Request $request, $id)
    {
        $domain = Domaine::find($id);
        if ($domain) {
            $domain->name = $request->name;
            $domain->save();
            return response()->json($domain);
        } else {
            return response()->json(['message' => 'Domain not found'], 404);
        }
    }

    public function destroy($id)
    {
        $domain = Domaine::find($id);
        if ($domain) {
            $domain->delete();
            return response()->json(['message' => 'Domain deleted successfully']);
        } else {
            return response()->json(['message' => 'Domain not found'], 404);
        }
    }

}

