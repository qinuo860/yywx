<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAuthTokens extends Model
{
    use HasFactory;
    public $table = "user_auth_tokens";
}
