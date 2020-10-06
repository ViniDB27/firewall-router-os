<?php

namespace App\Http\Controllers;

use App\Models\Domain;
use Illuminate\Http\Request;

class DomainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('domain');
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

            $domain = Domain::create([
                "domain" => $request->input('domain'),
                "active" => $request->input('active'),
                "user_id" => $request->user_request->id,
            ]);

            return response()->json(["message"=>"Domínio cadastrado com sucesso!", 'domain'=>$domain]);

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
        $domain = Domain::all();

        return $domain;
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

            $domain = Domain::all()->where('id',$id)->first();

            if(!$domain) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $domain->domain = $request->input('domain');
            $domain->active = $request->input('active');
            $domain->user_id = $request->user_request->id;


            return response()->json(["message"=>"Domínio alterado com sucesso!", 'domain'=>$domain]);

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

            $domain = Domain::all()->where('id', $id)->first();

            if(!$domain) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $domain->delete();

            return response()->json(["message"=>"Domínio Excluida com sucesso!"]);
        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }
}
