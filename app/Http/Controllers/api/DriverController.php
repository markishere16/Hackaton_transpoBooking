<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class DriverController extends Controller
{
    //
    public function viewAvailableDrivers() {

        $drivers = User::select('*')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')
                ->where('status',1)
                ->get();

        return $drivers;

    }
}
