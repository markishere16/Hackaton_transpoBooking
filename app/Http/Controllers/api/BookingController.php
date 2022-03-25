<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_booking;
use App\Models\tbl_user_details;
use Illuminate\Support\Facades\DB;
class BookingController extends Controller
{
    //

    public function Allbooking() {
      
       /*  $booking = tbl_booking::select('*')->get();

        return $booking; */
        $userId = auth("sanctum")->id();
        if(auth("sanctum")->user()->user_type == "driver")
        {
            $driver = tbl_user_details::where('user_id', $userId)->first();

            if($driver->status == 1){
                $booking = tbl_booking::where('tbl_bookings.driver_id', $userId)->select('tbl_bookings.*', 
                DB::raw("CONCAT(tbl_user_details.first_name,' ',tbl_user_details.last_name) as name"))
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_bookings.passenger_id')
                ->where('tbl_bookings.booking_status','available')
                ->get();
                return $booking;
            }elseif($driver->status == 2){
                $booking = tbl_booking::where('tbl_bookings.driver_id', $userId)->select('tbl_bookings.*', 
                DB::raw("CONCAT(tbl_user_details.first_name,' ',tbl_user_details.last_name) as name"))
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_bookings.passenger_id')
                ->where('tbl_bookings.booking_status','booked')
                ->first();
                return $booking;
            }

            
        }
    }

    public function BookingDetails($id) {
      
         $booking = tbl_booking::where('tbl_bookings.id', $id)->select('tbl_bookings.*', 
         DB::raw("CONCAT(tbl_user_details.first_name,' ',tbl_user_details.last_name) as name"))
         ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_bookings.passenger_id')
         ->first();
        
         return $booking;
     }

     public function AcceptBooking($id) {
        $userId = auth("sanctum")->id();
        $booking = tbl_booking::where('tbl_bookings.id', $id)->first();
        if($booking){
            $booking->booking_status = 'booked';
            $booking->save();

            $driver = tbl_user_details::where('user_id', $userId)->first();
            $driver->status = 2;
            $driver->save();
        }

    }

    public function CancelAcceptedBooking($id) {
        $userId = auth("sanctum")->id();
        $booking = tbl_booking::where('tbl_bookings.id', $id)->first();
        if($booking){
            $booking->booking_status = 'cancelled';
            $booking->save();

            $driver = tbl_user_details::where('user_id', $userId)->first();
            $driver->status = 1;
            $driver->save();
        }

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

            $findBooking->booking_status = 'Cancelled';
            $findBooking->save();


            return ['message'=>'Booking Succesfully Canceled'];
        } 
    }



    public function addBooking(Request $request) {
        $passenger_id = auth('sanctum')->id();
        $booking = new tbl_booking;



        // $from_lat = $request->from['lat'];
        // $from_long = $request->from['long'];

        // $to_lat = $request->to['lat'];
        // $to_long = $request->to['long'];


        $booking->driver_id = $request->driver_id;
        $booking->passenger_id =  $passenger_id;
        $booking->from = $request->from_location;
        $booking->to = $request->to_location;
        $booking->booking_status = 'available';
        $booking->fare = 15;
        $booking->description =$request->description;
        $booking->save();

        return  ['message'=> 'Successfully Booked', 'data' =>$booking];
    }


    public function userBookingHistory() {
       /*  $user = $sanctum_user;
        if($user['role'] == 'Passenger') {
            $booking = tbl_booking::select('*')
            ->where('passenger_id', $user_id)
            ->get();

            return $booking;
        } */
        $userId = auth("sanctum")->id();
        if(auth("sanctum")->user()->user_type == "driver") {

            $booking = tbl_booking::where('tbl_bookings.driver_id', $userId)->select('tbl_bookings.*', 
                DB::raw("CONCAT(tbl_user_details.first_name,' ',tbl_user_details.last_name) as name"))
                ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_bookings.passenger_id')
                ->where('tbl_bookings.booking_status', '!=', 'available')
                ->get();

            return $booking;
        }else{
            $booking = tbl_booking::where('tbl_bookings.passenger_id', $userId)->select('tbl_bookings.*', 
            DB::raw("CONCAT(tbl_user_details.first_name,' ',tbl_user_details.last_name) as name"))
            ->leftJoin('tbl_user_details', 'tbl_user_details.user_id', '=', 'tbl_bookings.passenger_id')
            ->where('tbl_bookings.booking_status', '!=', 'available')
            ->get();

        return $booking;
        }



       

     
    }

    public function clearAllHistoryBooking() {
        
    }
}
