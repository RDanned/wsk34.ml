<?php

namespace App\Front;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'user_front';
    protected $id = 'id';
    public $timestamps = false;
}
