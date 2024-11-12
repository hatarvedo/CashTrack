<?php

namespace App\Http\Controllers;

use App\Models\Jovedelem_kategoria;
use Illuminate\Http\Request;

class JovedelemKategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Jovedelem_kategoria::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(jovedelemKategoria $jovedelemKategoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, jovedelemKategoria $jovedelemKategoria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(jovedelemKategoria $jovedelemKategoria)
    {
        //
    }
}
