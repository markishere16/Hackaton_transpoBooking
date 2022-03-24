<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\DriverController;
use App\Http\Controllers\api\UserCurrentLocationController;
use App\Http\Controllers\api\BookingController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




//user_detao;s
Route::prefix('/users')->group(function () {
    Route::get('/all/{user_type}', [UserController::class, 'all']);
    Route::get('/select/{id}', [UserController::class, 'selectedUser']);
    Route::post('/upsert/{user_type}', [UserController::class, 'upSert']);
    Route::delete('/delete/{id}', [UserController::class, 'deleteUser']);
    Route::post('/add', [UserController::class, 'AddUser']);
    Route::put('/update_profile/{id}', [UserController::class, 'UpdateProfile']);
    Route::get('/details', [UserController::class, 'currentUser']);

    
});

//booking
Route::prefix('/booking')->group(function () {
    Route::get('/all', [BookingController::class, 'all']);
    Route::get('/cancel/{id}', [BookingController::class, 'cancelBooking']);
    Route::post('/add', [BookingController::class, 'addBooking']);
    Route::delete('/delete/{id}', [BookingController::class, 'deleteUser']);
    Route::get('/my-history', [BookingController::class, 'userBookingHistory']);

});


//drivers function
Route::prefix('/drivers')->group(function () {
    Route::get('/available', [DriverController::class, 'viewAvailableDrivers']);
   
});


Route::get('/my-location', [UserCurrentLocationController::class, 'getMyLocation']);
   





//login


Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);





