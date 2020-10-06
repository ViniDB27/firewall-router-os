<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
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

        if($request->user_request->administrator){

            if($request->input('administrator')){
                $adm = true;
                $mod = false;
                $vis = false;
            }else if($request->input('moderator')){
                $adm = false;
                $mod = true;
                $vis = false;
            }else{
                $adm = false;
                $mod = false;
                $vis = true;
            }



            $user = User::create([
                'name'=>$request->input('name'),
                'email'=>$request->input('email'),
                'password'=>bcrypt($request->input('password')),
                'administrator' => $adm,
                'moderator' => $mod,
                'visitant' => $vis,
                'active' => $request->input('active')
            ]);

            return response()->json(["message"=>"Usuário cadastrado com sucesso!", 'user'=>$user]);
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
        $user = User::all();

        return $user;
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

            if($request->input('administrator')){
                $adm = true;
                $mod = false;
                $vis = false;
            }else if($request->input('moderator')){
                $adm = false;
                $mod = true;
                $vis = false;
            }else{
                $adm = false;
                $mod = false;
                $vis = true;
            }



            $user = User::all()->where('id', $id)->first();

            if(!$user) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->password = bcrypt($request->input('password'));
            $user->administrator = $adm;
            $user->moderator = $mod;
            $user->visitant = $vis;
            $user->active = $request->input('active');


            return response()->json(["message"=>"Usuário cadastrado com sucesso!", 'user'=>$user]);
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

            $user = User::all()->where('id', $id)->first();

            if(!$user) return response()->json(["message"=>"Não temos nem um registro nesse id"], 404);

            $user->delete();

            return response()->json(["message"=>"Usuário excluido com sucesso!"]);

        }else{
            return response()->json(["message"=>"Usuário não tem permissão para essa ação"], 405);
        }
    }
}
