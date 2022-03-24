<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserCurrentLocationController extends Controller
{
    //
    public function getMyLocation() {
        $user_id = $sanctum_id;
        $location = tbl_user_current_location::find($user_id);
        return $location;
    
    }
}
