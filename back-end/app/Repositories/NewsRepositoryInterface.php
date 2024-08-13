<?php

namespace App\Repositories;

interface NewsRepositoryInterface
{
    public function getAllNews();
    public function getNewsById($id);
    public function createNews(array $data);
    public function updateNews($id, array $data);
    public function deleteNews($id);
    public function getNewsByType($type);
    public function searchNews($query, $month, $year);
}