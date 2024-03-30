<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class BalanceController extends Controller
{
    /**
     * Get the current balance of the authenticated user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserBalance(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }

        $balance = $user->balance;

        return response()->json(['balance' => $balance]);
    }
}
