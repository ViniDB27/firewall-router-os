<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Unique;

class CreateSubnetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subnets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('ip')->unique();
            $table->integer('netmask_bits');
            $table->unsignedBigInteger('local_id');
            $table->boolean('access');
            $table->boolean('active');
            $table->bigInteger('user_id');
            $table->timestamps();

            $table->foreign('netmask_bits')->references('bits')->on('netmasks');
            $table->foreign('local_id')->references('id')->on('locations')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subnets');
    }
}
