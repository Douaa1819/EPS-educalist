<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'primary_image' => 'required|string', 
                'content' => 'required|string',
                'redacteur_id' => 'nullable|integer',
                'type' => 'required|in:event,bource,concoure',
                'additional_images' => 'nullable|array',
                'additional_images.*' => 'string', 
            ]);

            // Decode and store the primary image
            $primaryImageData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $validatedData['primary_image']));
            $primaryImageName = 'primary_' . time() . '.png';
            Storage::disk('public')->put('news_images/' . $primaryImageName, $primaryImageData);

            $news = News::create([
                'title' => $validatedData['title'],
                'description' => $validatedData['description'],
                'primary_image' => 'news_images/' . $primaryImageName,
                'content' => $validatedData['content'],
                'redacteur_id' => $validatedData['redacteur_id'],
                'type' => $validatedData['type'],
            ]);

            if (isset($validatedData['additional_images'])) {
                foreach ($validatedData['additional_images'] as $index => $image) {
                    $imageData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image));
                    $imageName = 'additional_' . time() . '_' . $index . '.png';
                    Storage::disk('public')->put('news_images/' . $imageName, $imageData);
                    $news->images()->create(['path' => 'news_images/' . $imageName]);
                }
            }

            return response()->json(['message' => 'News created successfully', 'news' => $news], 201);
        } catch (\Exception $e) {
            Log::error('Error creating news: ' . $e->getMessage());
            return response()->json(['message' => 'Error creating news', 'error' => $e->getMessage()], 500);
        }
    }

    public function index()
    {
        $news = News::select('id', 'title', 'description', 'primary_image', 'created_at')
                    ->orderBy('created_at', 'desc')
                    ->get();

        return response()->json($news);
    }

    public function show($id)
    {
        $news = News::findOrFail($id);
        $news->increment('views');
        return response()->json($news);
    }


    public function relatedNews(Request $request)
    {
        $currentNewsId = $request->query('current_news_id');
        $currentNews = News::findOrFail($currentNewsId);

        $relatedNews = News::where('id', '!=', $currentNewsId)
                           ->where('type', $currentNews->type)
                           ->select('id', 'title', 'description', 'primary_image', 'created_at')
                           ->orderBy('created_at', 'desc')
                           ->take(4)
                           ->get();

        return response()->json($relatedNews);
    }

    public function popularPosts()
    {
        try {
            $popularPosts = News::select('id', 'title', 'description', 'primary_image', 'created_at', 'views')
                                ->orderBy('views', 'desc')
                                ->take(4)
                                ->get();
            return response()->json($popularPosts);
        } catch (\Exception $e) {
            Log::error('Error fetching popular posts: ' . $e->getMessage());
            return response()->json(['message' => 'Error fetching popular posts'], 500);
        }
    }
        
    
    public function filter(Request $request)
    {
        $type = $request->query('type');
        // Fetch the news based on type
        $news = News::where('type', $type)->get();
    
        if ($news->isEmpty()) {
            return response()->json(['message' => 'No news found'], 404);
        }
    
        return response()->json($news);
    }
    
    // public function search(Request $request)
    // {
    //     $query = $request->query('q');
    //     // Perform search
    //     $news = News::where('title', 'LIKE', "%{$query}%")->get();
    
    //     if ($news->isEmpty()) {
    //         return response()->json(['message' => 'No news found'], 404);
    //     }
    
    //     return response()->json($news);
    // }
    


public function search(Request $request)
{
    $query = $request->query('q'); 

    if (!$query) {
        return response()->json([], 400); 
    }

    try {
        $news = News::where('title', 'LIKE', '%' . $query . '%')
                    ->orWhere('description', 'LIKE', '%' . $query . '%')
                    ->select('id', 'title', 'description', 'primary_image', 'created_at')
                    ->orderBy('created_at', 'desc')
                    ->get();

        return response()->json($news);
    } catch (\Exception $e) {
        Log::error('Failed to search news', [
            'query' => $query,
            'error' => $e->getMessage()
        ]);

        return response()->json(['error' => 'Failed to search news'], 500);
    }
}

    
    

}