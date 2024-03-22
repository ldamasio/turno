<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Check;

class CheckController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|numeric',
            'description' => 'required|string',
            'image' => 'required|image',
        ]);

        $imagePath = $request->file('image')->store('checks');

        $check = Check::create([
            'user_id' => $validatedData['user_id'],
            'amount' => $validatedData['amount'],
            'description' => $validatedData['description'],
            'image' => $imagePath,
            'status' => 'pending',
        ]);

        return response()->json($check);
    }
}