<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\JovedelemController;
use App\Http\Controllers\JovedelemKategoriaController;
use App\Http\Controllers\KiadasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
//Get all Felhasznalo
Route::get('/felhasznalok',[FelhasznaloController::class,'index']);

//Get specific Felhasznalo
Route::get('/felhasznalo/{felhasznaloID}', [FelhasznaloController::class, 'getFelhasznaloById']);

//Új felhasznalo hozzáadása
Route::post('/addFelhasznalo',[FelhasznaloController::class, 'addFelhasznalo']);

//Felhasznalo frissítés 
Route::put('/updateFelhasznalo/{felhasznaloID}', [FelhasznaloController::class, 'updateFelhasznalo']);
//Felhasznalo törlés
Route::delete('/deleteFelhasznalo/{felhasznaloID}', [FelhasznaloController::class, 'deleteFelhasznalo']);

Route::get('/jovedelemkategoriak',[JovedelemKategoriaController::class,'index']);
Route::get('/jovedelmek',[JovedelemController::class,'index']);
Route::get('/kiadasok', [KiadasController::class,'index']);


