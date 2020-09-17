<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function sessions() {
        return $this->hasMany(Session::class);
    }
}
