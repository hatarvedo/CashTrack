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

    public function show(kiadasKategoria $kiadasKategoria)
    {
        $kiadas = Kiadaas::find($kategoriaID);
        if(is_null($kiadas)){
            return response()->json(['message' => 'Felhasznalo nem talalhato'],404);
        }
        return response()->json($kiadas,200);
    }
}
