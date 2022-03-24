<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    //

    public function Allbooking() {
        $booking = tbl_booking::select('*')->get();

        return $booking;
    }


    public function deleteBooking($booking_id) {

        $findBooking = tbl_booking::find($booking_id);

        if($findBooking) {
            $findBooking->delete();


            return ['message'=>'Booking Succesfully Canceled'];
        }
    }


    public function cancelBooking($booking_id) {
       
        $findBooking = tbl_booking::find($booking_id);

        if($findBooking) {

            $findBooking->status = 'Cancelled';
            $findBooking->save();


            return ['message'=>'Booking Succesfully Canceled'];
        } 
    }



    public function addBooking(Request $request) {

        $booking = new tbl_booking;



        $from_lat = $request->from['lat'];
        $from_long = $request->from['long'];

        $to_lat = $request->to['lat'];
        $to_long = $request->to['long'];


        $booking->driver_id = $request->driver_id;
        $booking->passenger_id = $request->passenger_id;
        $booking->from = $from_lat . ',' . $from_long;
        $booking->to = $to_last . ',' . $from_long;
        $booking->status = $request->booking_status;

        $booking->save();

        return  ['message'=> 'Successfully Booked', 'data' =>$booking];
    }


    public function userBookingHistory() {
        $user = $sanctum_user;


        if($user['role'] == 'Passenger') {
            $booking = booking::select('*')
            ->where('passenger_id', $user_id)
            ->get();

            return $booking;
        }

        if($user['role'] == 'Driver') {
            $booking = booking::select('*')
            ->where('driver_id' , $user_id)
            ->get();
        }



        return $booking;

     
    }
}
