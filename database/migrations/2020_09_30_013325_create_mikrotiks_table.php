<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMikrotiksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mikrotiks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('subnet_id');
            $table->string('ip_wan')->unique();
            $table->string('ip_lan')->unique();
            $table->string('gateway');
            $table->integer('netmask_bits');
            $table->string('dns1');
            $table->string('dns2');
            $table->string('username');
            $table->string('password');
            $table->boolean('active');
            $table->bigInteger('user_id');
            $table->timestamps();

            $table->foreign('subnet_id')->references('id')->on('subnets')->onDelete('CASCADE');
            $table->foreign('netmask_bits')->references('bits')->on('netmasks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mikrotiks');
    }
}
