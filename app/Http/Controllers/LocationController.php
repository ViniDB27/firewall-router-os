<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('locations', );
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
                'address'=>'required',
                'number'=>'required',
                'district'=>'required',
                'city'=>'required',
                'zip_code'=>'required',
                'uf'=>'required',
                'active'=>'required'
            ]);

            $local = Location::create([
                "name"=> $request->input('name'),
                "address" => $request->input('address'),
                "number" => $request->input('number'),
                "district" => $request->input('district'),
                "city" => $request->input('city'),
                "zip_code" => $request->input('zip_code'),
                "uf" => $request->input('uf'),
                "active" => $request->input('active'),
                "user_id" => $request->user_request->id,
            ]);

            return response()->json(["message"=>"Local cadastrado com sucesso!", 'local'=>$local]);

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
        $locations = Location::all();

        return $locations;
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

            $local = Location::all()->where('id', $id)->first();

            if(!$local) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $local->name = $request->input('name');
            $local->address = $request->input('address');
            $local->number = $request->input('number');
            $local->district = $request->input('district');
            $local->city = $request->input('city');
            $local->zip_code = $request->input('zip_code');
            $local->uf = $request->input('uf');
            $local->active = $request->input('active');
            $local->user_id = $request->user_request->id;

            return response()->json(["message"=>"Local alterado com sucesso!", 'local'=>$local]);

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

            $local = Location::all()->where('id', $id)->first();

            if(!$local) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $local->delete();

            return response()->json(["message"=>"Local excluido com sucesso!"]);

        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }

}
