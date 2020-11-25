<?php

namespace App\Http\Controllers;

use App\Models\Mikrotik;
use App\Models\Netmask;
use App\Models\Subnet;
use Illuminate\Http\Request;

class MikrotikController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('mikrotiks');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->user_request->administrator){

            $request->validate([
                'name'=>'required|max:100',
                'ip_wan'=>'required',
                'ip_lan'=>'required',
                'gateway'=>'required',
                'subnet_id'=>'required',
                'dns1'=>'required',
                'dns2'=>'required',
                'netmask_bits'=>'required',
                'username'=>'required',
                'active'=>'required',
            ]);

            $mikrotik = Mikrotik::create([
                "name"=> $request->input('name'),
                "subnet_id"=> $request->input('subnet_id'),
                "ip_wan"=> $request->input('ip_wan'),
                "ip_lan"=> $request->input('ip_lan'),
                "gateway"=> $request->input('gateway'),
                "netmask_bits"=> $request->input('netmask_bits'),
                "dns1" => $request->input('dns1'),
                "dns2" => $request->input('dns2'),
                "username" => $request->input('username'),
                "password" => $request->input('password'),
                "active" => $request->input('active'),
                "user_id" => $request->user_request->id,
            ]);

            return response()->json(["message"=>"Mirkotik cadastrado com sucesso!", 'mikrotik'=>$mikrotik]);

        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $newArray = [];
        $mikrotik = Mikrotik::all();

        foreach ($mikrotik as $mk) {
            $mk->subnet = Subnet::all()->where('id',$mk->subnet_id)->first();
            $mk->netmask = Netmask::all()->where('bits', $mk->netmask_bits)->first();

            array_push($newArray,$mk);

        }


        return $newArray;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if($request->user_request->administrator){

            $mikrotik = Mikrotik::all()->where('id',$id)->first();

            if(!$mikrotik) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $mikrotik->name = $request->input('name');
            $mikrotik->subnet_id  = $request->input('subnet_id ');
            $mikrotik->ip_wan  = $request->input('ip_wan ');
            $mikrotik->ip_lan  = $request->input('ip_lan ');
            $mikrotik->gateway = $request->input('gateway');
            $mikrotik->netmask_bits  = $request->input('netmask_bits ');
            $mikrotik->dns1   = $request->input('dns1 ');
            $mikrotik->dns2  = $request->input('dns2');
            $mikrotik->username  = $request->input('username');
            $mikrotik->password  = $request->input('password');
            $mikrotik->active  = $request->input('active');
            $mikrotik->user_id  = $request->user_request->id;


            return response()->json(["message"=>"Mirkotik alterado com sucesso!", 'mikrotik'=>$mikrotik]);

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
    public function destroy(Request $request, $id)
    {
        if($request->user_request->administrator){

            $mikrotik = Mikrotik::all()->where('id', $id)->first();

            if(!$mikrotik) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $mikrotik->delete();

            return response()->json(["message"=>"Mikrotik Excluida com sucesso!"]);
        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }
}
