<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;

class RegTypes extends Model
{
    protected $table = 'reg_type';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
