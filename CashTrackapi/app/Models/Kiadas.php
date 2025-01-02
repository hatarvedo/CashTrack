<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kiadas extends Model
{
    use HasFactory;
    public $table = "kiadasok";
    protected $primaryKey = "kiadasID";
    public $timestamps = false;
    public $guarded = [];


}
