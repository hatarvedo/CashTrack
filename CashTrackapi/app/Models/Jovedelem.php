<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jovedelem extends Model
{
    use HasFactory;
    public $table = "jovedelmek";
    public $timestamps = false;
    protected $primaryKey = "jovedelemID";
    public $guarded = [];
}
