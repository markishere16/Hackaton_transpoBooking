<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\tbl_booking;
class DriverController extends Controller
{
    //
    public function viewAvailableDrivers() {
        $userId = auth("sanctum")->id();
        $checkBooking = tbl_booking::where('passenger_id', $userId)
        ->select('tbl_bookings.*',  DB::raw("CONCAT(tbl_user_details.first_name,' ',tbl_user_details.last_name) as name"))
        ->where('booking_status', 'available')
        ->orwhere('booking_status', 'booked')
        ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_bookings.driver_id')
        ->first();

        if($checkBooking){
            
            $isAccepted;
            if($checkBooking->booking_status == 'available')$isAccepted = false;
            elseif($checkBooking->booking_status == 'booked')$isAccepted = true;
            return [
                'isBooked'=> true,
                'isAccepted'=> $isAccepted,
                'data'=>  $checkBooking,
            ];
           
        }

        $drivers = User::select('*')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')
                ->where('status',1)
                ->get();

        //return $drivers;
        return ['isBooked'=> false, 'isAccepted'=> false, 'data'=>  $drivers];

    }

    public function Details($id) {

        $drivers = User::select('*')
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'users.id')
                ->where('status',1)
                ->get();

        return $drivers;

    }
    
}
