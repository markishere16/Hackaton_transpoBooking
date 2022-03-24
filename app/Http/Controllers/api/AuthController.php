<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request){

    
        $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);


        if(Auth::attempt(['user_name' => $request->username, 'password' => $request->password])){
            return response()->json([
                "message" => "Login Success",
                "success" => true,
            ]); 
        }
        else{
            return response()->json([
                "message" => "Incorrect Email or Password. Please try again",
                "success" => false
            ]);
        }
        
    }
}
