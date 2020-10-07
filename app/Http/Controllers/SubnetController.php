<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Netmask;
use App\Models\Subnet;
use Illuminate\Http\Request;

class SubnetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('subnets');
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

            $subnet = Subnet::create([
                "name"=> $request->input('name'),
                "ip" => $request->input('ip'),
                "netmask_bits" => $request->input('netmask_bits'),
                "local_id" => $request->input('local_id'),
                "access" => $request->input('access'),
                "active" => $request->input('active'),
                "user_id" => $request->user_request->id,
            ]);

            return response()->json(["message"=>"Subrede cadastrado com sucesso!", 'subrede'=>$subnet]);

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
        $response = array();
        $subnet = Subnet::all();

        foreach ($subnet as $sub) {
            $local = Location::all()->where('id', $sub->local_id)->first();

            $netmask = Netmask::all()->where('bits', $sub->netmask_bits)->first();

            array_push($response, [
                "subnet" => $sub,
                "local" => $local,
                "netmask" => $netmask
            ]);
        }

        return $response;
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

            $subnet = Subnet::all()->where('id', $id)->first();

            if(!$subnet) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $subnet->name= $request->input('name');
            $subnet->ip = $request->input('ip');
            $subnet->netmask_bits = $request->input('netmask_bits');
            $subnet->local_id = $request->input('local_id');
            $subnet->access = $request->input('access');
            $subnet->active = $request->input('active');
            $subnet->user_id = $request->user_request->id;


            return response()->json(["message"=>"Subrede alterada com sucesso!", 'subrede'=>$subnet]);

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

            $subnet = Subnet::all()->where('id', $id)->first();

            if(!$subnet) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $subnet->delete();

            return response()->json(["message"=>"Subrede Excluida com sucesso!"]);
        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }
}
