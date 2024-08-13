<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;


class ArticleController extends Controller
{

    public function index()
    {
        try {
            $articles = Article::all();
            return response()->json($articles);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    
    public function store(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'contenu' => 'required|string',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // adjust max file size as needed
    ]);

    $article = new Article();
    $article->title = $request->title;
    $article->description = $request->description;
    $article->contenu = $request->contenu;

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('images', 'public');
        $article->image = $imagePath;
    }

    $article->save();

    return response()->json(['message' => 'Article created successfully', 'article' => $article], 201);
}

public function update(Request $request, $id)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'contenu' => 'required|string',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // adjust max file size as needed
    ]);

    $article = Article::findOrFail($id);
    $article->title = $request->title;
    $article->description = $request->description;
    $article->contenu = $request->contenu;

    if ($request->hasFile('image')) {
        // Delete old image if updating
        if ($article->image) {
            Storage::disk('public')->delete($article->image);
        }
        
        // Upload new image
        $imagePath = $request->file('image')->store('images', 'public');
        $article->image = $imagePath;
    }

    $article->save();

    return response()->json(['message' => 'Article updated successfully', 'article' => $article], 200);
}

    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return response()->json(['message' => 'Article deleted successfully'], 200);
    }
}

