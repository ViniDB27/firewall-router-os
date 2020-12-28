<?php

namespace App\Http\Controllers;

use App\Models\Domain;
use App\Models\Host;
use App\Models\HostPerminssion;
use App\Models\HostType;
use App\Models\Mikrotik;
use App\Models\Netmask;
use Illuminate\Http\Request;

class HostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('hosts');
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

           //return json_encode($request);

            $request->validate([
                'name'=>'required|max:100',
                'mikrotik_id'=>'required',
                'mac'=>'required|unique:App\Models\Host,mac',
                'ip'=>'required|unique:App\Models\Host,ip',
                'gateway'=>'required',
                'netmask_bits'=>'required',
                'dns1'=>'required',
                'dns2'=>'required',
                'domain_id'=>'required',
                'host_type_id'=>'required',
                'host_permission_id'=>'required',
                'skype'=>'required',
                'lower_port'=>'required',
                'high_port'=>'required',
                'fixed'=>'required',
                'active'=>'required',

            ]);



            $host = Host::create([
                "name" => $request->input('name'),
                "mikrotik_id"=> intval($request->input('mikrotik_id')),
                "mac" => $request->input('mac'),
                "ip" => $request->input('ip'),
                "gateway" => $request->input('gateway'),
                "netmask_bits" => intval($request->input('netmask_bits')),
                "dns1" => $request->input('dns1'),
                "dns2" => $request->input('dns2'),
                "domain_id" => intval($request->input('domain_id')),
                "host_type_id" => intval($request->input('host_type_id')),
                "host_permission_id" => intval($request->input('host_permission_id')),
                "skype" => $request->input('skype'),
                "lower_port" => $request->input('lower_port'),
                "high_port" => $request->input('high_port'),
                "fixed" => $request->input('fixed'),
                "active" => $request->input('active'),
                "user_id" => $request->user_request->id,
            ]);

            return response()->json(["message"=>"Host cadastrado com sucesso!", 'host'=>$host]);

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
        $hosts = Host::all();
        $newArray = [];


        foreach ($hosts as $host) {
            $host->mikrotik = Mikrotik::all()->where('id',$host->mikrotik_id)->first();
            $host->netmask = Netmask::all()->where('bits',$host->netmask_bits)->first();
            $host->domain = Domain::all()->where('id',$host->domain_id)->first();
            $host->type = HostType::all()->where('id',$host->host_type_id)->first();
            $host->permission = HostPerminssion::all()->where('id',$host->host_permission_id)->first();

            array_push($newArray,$host);

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

            $host = Host::all()->where('id',$id)->first();

            if(!$host) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $host->name = $request->input('name');
            $host->mikrotik_id= $request->input('mikrotik_id');
            $host->mac = $request->input('mac');
            $host->ip = $request->input('ip');
            $host->gateway= $request->input('gateway');
            $host->netmask_bits = $request->input('netmask_bits');
            $host->dns1 = $request->input('dns1 ');
            $host->dns2 = $request->input('dns2');
            $host->domain_id = $request->input('domain_id');
            $host->host_type_id = $request->input('host_type_id');
            $host->host_permission_id = $request->input('host_permission_id');
            $host->skype = $request->input('skype');
            $host->lower_port = $request->input('lower_port');
            $host->high_port = $request->input('high_port ');
            $host->fixed = $request->input('fixed');
            $host->active = $request->input('active');
            $host->user_id = $request->user_request->id;

            return response()->json(["message"=>"Host alterado com sucesso!", 'host'=>$host]);

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

            $host = Host::all()->where('id', $id)->first();

            if(!$host) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $host->delete();

            return response()->json(["message"=>"Host Excluida com sucesso!"]);
        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }
}
