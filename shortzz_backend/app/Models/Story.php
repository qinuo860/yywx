<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;
    public $table = "stories";

    public function user()
    {
        return $this->hasOne(Users::class, 'id', 'user_id');
    }
    public function music()
    {
        return $this->hasOne(Musics::class, 'id', 'sound_id');
    }
}
