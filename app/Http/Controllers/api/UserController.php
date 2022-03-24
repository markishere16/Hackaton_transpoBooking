<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tbl_user_details;
use App\Models\user;
class UserController extends Controller
{


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


    public function upSert(Request $request) {



        $user = tbl_user_details::find($request->user_id);

        if($user) {
            
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            // $user->middle_name = $request->middle_name;
            // $user->suffix = $request->suffix;

            $user->address = $request->address;
            $user->contact_no = $request->contact_no;
            $user->save();
        } else {
            $user = new tbl_user_details;
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            // $user->middle_name = $request->middle_name;
            // $user->suffix = $request->suffix;
            $user->address = $request->address;
            $user->contact_no = $request->contact_no;
            $user->save();
        }


        return ['message'=>'Successfully Saved', 'data'=>$user];

    }


    public function deleteUser($user_id) {
        $user = tbl_user_details::find($user_id);


        if($user) {
          

            if(   $user->delete()) {
                return ['message'=> 'User Successfully Deleted!'];
            }
        }
    }
}
