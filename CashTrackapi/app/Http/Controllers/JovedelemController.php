<?php

namespace App\Http\Controllers;

use App\Models\Jovedelem;
use Illuminate\Http\Request;

class JovedelemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Jovedelem::all();
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
    public function show(Jovedelem $jovedelem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Jovedelem $jovedelem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jovedelem $jovedelem)
    {
        //
    }
}
