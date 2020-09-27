<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;
use App\Admin\Event;

class Registration extends Model
{
    protected $table = 'registrations';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function event(){
        return $this->belongsTo(Event::class, 'event_id');
    }
}
