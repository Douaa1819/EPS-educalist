<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminsController extends Controller
{
    public function index()
    {
        $admins = Admin::with('user')->get();
        return response()->json($admins);
    }
    

    public function update(Request $request, $id)
    {
        $request->validate([
            'is_banned' => 'required|boolean',
        ]);
    
        $admin = Admin::findOrFail($id);
        $admin->is_banned = $request->is_banned;
        $admin->save();
    
        return response()->json($admin);
    }   
}

