<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;

class FelhasznaloController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Felhasznalo::all();
    }

    public function getFelhasznalo()
    {
        return response()->json(Felhasznalo::all(),200);
    }

    public function getFelhasznaloById($felhasznaloID){
        $felhasznalo = Felhasznalo::find($felhasznaloID);
        if(is_null($felhasznalo)){
            return response()->json(['message' => 'Felhasznalo nem talalhato'], 404);
        }
        return response()->json($felhasznalo, 200);
    }
    public function getFelhasznaloByEmail($email){
        if(is_null($email)){
            return response()->json(['message' => 'Felhasznalo nem talalhato'], 404);
        }
        return response()->json(Felhasznalo::where('email','=',$email)->first(), 200);

    }
    public function addFelhasznalo(request $request){
        $felhasznalok = Felhasznalo::create($request->all());
        return response($felhasznalok,201);
    }
    public function updateFelhasznalo(Request $request, $felhasznaloID){
        $felhasznalo = Felhasznalo::find($felhasznaloID);
        if(is_null($felhasznalo)){
            return response()->json(['message' => 'Felhasznalo nem talalhato'], 404);
        }
        $felhasznalo->update($request->all());
        return response($felhasznalo,200);
    }
    public function deleteFelhasznalo($felhasznaloID){
        $felhasznalo = Felhasznalo::find($felhasznaloID);
        if(is_null($felhasznalo)){
            return response()->json(['message' => 'Felhasznalo nem talalhato'], 404);
        }
        $felhasznalo->delete();
        return response()->json(null,204);
    }

    
}
