<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;
use App\Models\tbl_user_details;
use App\Models\User;
class UserController extends Controller
{


    public function currentUser() {
        $userId = auth('sanctum')->id();
        $currentUser = tbl_user_details::where('user_id', $userId)->first();
        $currentUser->user_type = auth("sanctum")->user()->user_type;
        return $currentUser;

       /*  $currentUser = auth('sanctum')->user();
        $userDetails  = auth('sanctum')->user()->tbl_userDetails;
        $userDetails->user_name = $currentUser->user_name;
        $userDetails->user_type = $currentUser->user_type;

        return $userDetails; */
    }


    public function all($user_type) {
        $user = tbl_user_details::select('*')
                ->where('users.user_type', $user_type)
                ->leftJoin('users' , 'users.id' , '=' , 'tbl_user_details.id')
                ->get();

        return $user;

    }

    public function selectedUser($user_id){
        $user = user::select('*')
                ->leftJoin('tbl_user_details' , 'tbl_user_details.user_id' , '=' , 'users.id')
                ->get();

                return $user;
    
    }


    public function upSert( $user_type, Request $request) {



        $user_details = tbl_user_details::find($request->user_id);

        if($user_details) {
            

            $user = User::find($request->user_id);

            $user->user_name = $request->user_name;
            // $user->password = $request->user_name;

            $user_details->first_name = $request->first_name;
            $user_details->last_name = $request->last_name;
            // $user_details->middle_name = $request->middle_name;
            // $user_details->suffix = $request->suffix;
            $user_details->address = $request->address;
            $user_details->contact_no = $request->contact_no;
            $user_details->vehicle_type = $request->vehicle_type;
            
            $user_details->save();
        } else {


            $New = User::create([
                'user_name' =>  $request->user_name,
                'password' => Hash::make($request->password),
                'user_type' =>  $user_type,
            ]);

            
            $user_details = new tbl_user_details;




            $user_details->user_id = $New->id;
            $user_details->first_name = $request->first_name;
            $user_details->last_name = $request->last_name;
            // $user_details->middle_name = $request->middle_name;
            // $user_details->suffix = $request->suffix;
            $user_details->address = $request->address;
            $user_details->contact_no = $request->contact_no;
            $user_details->vehicle_type = $request->vehicle_type;
            $user_details->save();
        }


        return ['message'=>'Successfully Saved', 'data'=>$user_details];

    }


    public function deleteUser($user_id) {
        $user = tbl_user_details::find($user_id);


        if($user) {
          

            if(   $user->delete()) {
                return ['message'=> 'User Successfully Deleted!'];
            }
        }
    }

    public function AddUser(Request $request) {
  
        $New = User::create([
            'user_name' =>  $request->username,
            'password' => Hash::make($request->password),
            'user_type' =>  $request->user_type,
        ]);


        if(!$New) {
            return response()->json([
                "message" => "The provided details is invalid!",
                "success" => false
            ]);
        }


        return response()->json([
            "message" => "Successfully Added!",
            "success" => true,

        ]);
    }


    
}
