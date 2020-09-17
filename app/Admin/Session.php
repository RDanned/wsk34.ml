<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    protected $table = 'sessions';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function event(){
        return $this->belongsTo(Event::class, 'id');
    }
}
