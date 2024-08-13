<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'primary_image', 'content', 'redacteur_id', 'type'];
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
