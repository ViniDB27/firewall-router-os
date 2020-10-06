<?php

namespace App\Http\Controllers;

use App\Models\HostType;
use Illuminate\Http\Request;

class TypeHostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('typehost');
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

            $type_host = HostType::create([
                "name" => $request->input('name'),
                "user_id" => $request->user_request->id,
            ]);

            return response()->json(["message"=>"Host type cadastrado com sucesso!", 'host_type'=>$type_host]);

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
        $type_host = HostType::all();

        return $type_host;
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

            $type_host = HostType::all()->where('id',$id)->first();

            if(!$type_host) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $type_host->name = $request->input('name');
            $type_host->user_id = $request->user_request->id;


            return response()->json(["message"=>"Host type alterado com sucesso!", 'host_type'=>$type_host]);

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

            $type_host = HostType::all()->where('id', $id)->first();

            if(!$type_host) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $type_host->delete();

            return response()->json(["message"=>"Host type Excluida com sucesso!"]);
        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }
}
