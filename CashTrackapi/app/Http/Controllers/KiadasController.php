<?php

namespace App\Http\Controllers;

use App\Models\Kiadas;
use Illuminate\Http\Request;

class KiadasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Kiadas::all();
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
    public function show(Kiadas $kiadas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kiadas $kiadas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kiadas $kiadas)
    {
        //
    }
}
