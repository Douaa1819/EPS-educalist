<?php

namespace App\Repositories;

use App\Models\News;
use Exception;

class NewsRepository implements NewsRepositoryInterface
{
    public function getAllNews()
    {
        return News::all();
    }

    public function getNewsById($id)
    {
        return News::findOrFail($id);
    }

    public function createNews(array $data)
    {
        return News::create($data);
    }

    public function updateNews($id, array $data)
    {
        $news = $this->getNewsById($id);
        $news->update($data);
        return $news;
    }

    public function deleteNews($id)
    {
        $news = $this->getNewsById($id);
        $news->delete();
    }

    public function getNewsByType($type)
    {
        return News::where('type', $type)->get();
    }

    public function searchNews($query, $month, $year)
    {
        $news = News::query();

        if ($query) {
            $news->where('title', 'like', "%{$query}%")
                 ->orWhere('content', 'like', "%{$query}%");
        }

        if ($month) {
            $news->whereMonth('created_at', $month);
        }

        if ($year) {
            $news->whereYear('created_at', $year);
        }

        return $news->get();
    }
}