<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblBooking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('tbl_booking', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('passenger_id');
            $table->integer('driver_id');
            $table->string('from'); //lat and long
            $table->string('to');//lat and long
            $table->string('fare');
            $table->string('booking_status');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
