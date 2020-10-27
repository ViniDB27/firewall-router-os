<?php

namespace App\Http\Controllers;

use App\Models\Dns;
use Illuminate\Http\Request;

class DnsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $dns = Dns::all();

        return $dns;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if($request->user_request->administrator){
            $dns1 = Dns::all()->where('id', '1')->first();
            $dns2 = Dns::all()->where('id', '2')->first();

            $dns1->dns = $request->input('dns1');
            $dns2->dns = $request->input('dns2');

            $dns1->save();
            $dns2->save();

            return response()->json(["message"=>"Dns alterado com sucesso"],200);

        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
