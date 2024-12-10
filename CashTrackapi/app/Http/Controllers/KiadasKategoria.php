<?php

namespace App\Http\Controllers;
use App\Models\Kiadas_kategoria;
use Illuminate\Http\Request;

class KiadasKategoria extends Controller
{
    public function index()
    {
        return Kiadas_kategoria::all();
    }
}
