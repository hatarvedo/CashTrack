<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;
use  Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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

public function authentication(Request $request){
    $credentials = $request->only(['email', 'password']);
    if(Auth::attempt($credentials)){
        return response()->json(['message' => 'Sikeres belépés']);

    }   
    else{
        return response()->json(['error' => 'Hibás email vagy jelszó'],401);
    }
}


    public function belepes(request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|email',
            'jelszo' => 'required',
            'password_confirm' => 'required|same:jelszo',
        ]);

        if($validator->fails())
        {
            return response()->json(['message' => 'Hibás email vagy jelszó'], 400);
        }
        $email = $request->input('email');
        $password = $request->input('jelszo');
        return response()->json(['message' => 'Sikeres belepés'], 201);
    }
    public function getFelhasznaloByEmail(string $email)
    {
        $felhasznalo = Felhasznalo::where('email', $email)->first();

        if (is_null($felhasznalo)) {
            return response()->json(['message' => 'Felhasznalo nem talalhato'], 404);
        }

        return response()->json($felhasznalo, 200);
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
