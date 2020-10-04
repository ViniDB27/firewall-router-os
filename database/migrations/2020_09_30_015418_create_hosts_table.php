<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hosts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('mikrotik_id');
            $table->string('mac')->unique();
            $table->string('ip')->unique();
            $table->string('gateway');
            $table->integer('netmask_bits');
            $table->string('dns1');
            $table->string('dns2');
            $table->unsignedBigInteger('domain_id');
            $table->unsignedBigInteger('host_type_id');
            $table->unsignedBigInteger('host_permission_id');
            $table->boolean('skype');
            $table->boolean('lower_port');
            $table->boolean('high_port');
            $table->boolean('fixed');
            $table->boolean('active');
            $table->timestamps();

            $table->foreign('mikrotik_id')->references('id')->on('mikrotiks')->onDelete('CASCADE');
            $table->foreign('host_type_id')->references('id')->on('host_types');
            $table->foreign('host_permission_id')->references('id')->on('hosts_permissions');
            $table->foreign('domain_id')->references('id')->on('domains');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hosts');
    }
}
