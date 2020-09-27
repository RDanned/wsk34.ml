<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('event_id')->unsigned();
            $table->foreign('event_id')
                ->references('id')->on('events');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')->on('user_front');
            $table->integer('reg_type')->unsigned();
            $table->foreign('reg_type')
                ->references('id')->on('reg_type');
            $table->float('calc_price');
            $table->date('date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registrations');
    }
}
