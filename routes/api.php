<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;
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
    Route::post('/upsert', [UserController::class, 'upSert']);
    Route::delete('/delete/{id}', [UserController::class, 'deleteUser']);
});

//booking
Route::prefix('/booking')->group(function () {
    Route::get('/all', [bookingController::class, 'all']);
    Route::get('/cancel/{id}', [bookingController::class, 'cancelBooking']);
    Route::post('/add/{id}', [bookingController::class, 'addBooking']);
    Route::delete('/delete/{id}', [bookingController::class, 'deleteUser']);
    Route::get('/my-history', [bookingController::class, 'userBookingHistory']);

});



//login


Route::post('/login', [AuthController::class, 'UserLogin']);
Route::post('/logout', [AuthController::class, 'logout']);





