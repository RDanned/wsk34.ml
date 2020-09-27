<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;
use App\Admin\Event;

class Ratings extends Model
{
    protected $table = 'ratings';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function event(){
        return $this->belongsTo(Event::class, 'id');
    }
}
