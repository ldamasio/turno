<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/hello', function () {
    return response()->json(['message' => 'Hello, World!']);
});

Route::post('/register', [UserController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', 'TransactionController@create');
    Route::get('/users', 'UserController@index');
    Route::post('/transactions', 'TransactionController@create');
    Route::post('/checks', 'CheckController@store');
    Route::get('/checks/pending', 'CheckController@getPendingChecks')->middleware('role:admin');
    Route::post('/checks/{id}/approve', 'CheckController@approveCheck')->middleware('role:admin');
    Route::post('/checks/{id}/reject', 'CheckController@rejectCheck')->middleware('role:admin');
});
