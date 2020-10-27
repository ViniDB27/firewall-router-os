import React, {useEffect, useState} from 'react';
import api from '../utils/axios'
import IsIp from '../utils/IsIp'

import Swal from 'sweetalert2/dist/sweetalert2.js'
function RegDns() {

    useEffect(()=>{
        async function loadDns(){

            const response =  await api.get('/dns')
            .catch(async error=>{

                let errors = { ... error}

                if(errors.response.status == 401){

                    const { value: accept } = await  Swal.fire({

                        title: `Ops...`,
                        text: "Sua cessão inspirou!",
                        icon: 'error',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Voltar ao Login!'

                    })

                    window.location.href = "/login";

                }else{

                    console.log(errors)

                    Swal.fire({

                        title: `Ops...`,
                        text: error,
                        icon: 'error',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'

                    })
                }


            })

            if(response.status == 200){
                let allDns = [ ... response.data]

                allDns.map(dns=>{
                    if(dns.id == 1){
                        setDns1(dns.dns)
                    }else{
                        setDns2(dns.dns)
                    }
                })

            }


        }

        loadDns()
    },[])

    const [dns1, setDns1] = useState("")
    const [dns2, setDns2] = useState("")

    async function registerDns(event) {
        event.preventDefault()

        if( dns1 !== "" && dns2 !== "" ){

            if(IsIp(dns1)){
                if(IsIp(dns2)){

                    await api.put('/dns',{
                        dns1,
                        dns2
                    })
                    .then(response=>{
                        Swal.fire({
                            icon: 'success',
                            title: 'Show!',
                            text: response.data.message,
                        })
                    })
                    .catch(error=>{
                        let errors = { ... error}

                        if(errors.response.status == 422){

                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text:errors.response.data.message,
                            })

                        }else{

                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text:error,
                            })

                        }

                    })

                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: "O DNS 2 informado não é valido",
                    })
                }
            }else{
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: "O DNS 1 informado não é valido",
                })
            }

        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: "Não podemos alterar os dns's se todos os campos não estiverem preenchidos!",
            })
        }
    }

    return (
        <form className="form-cad-dns row" id="form-dns" onSubmit={e=>registerDns(e)} >

            <div className="form-group dns1 col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns1-dns" className="text-dark" >DNS 1</label>
                <input type="text" className="form-control" id="input-dns1-dns" value={dns1} onChange={e=>{setDns1(e.target.value)}} />
            </div>

            <div className="form-group dns2-mikrotik dns2 col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns2-dns" className="text-dark" >DNS 2</label>
                <input type="text" className="form-control" id="input-dns2-dns" value={dns2} onChange={e=>{setDns2(e.target.value)}} />
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>

        </form>
    );
}

export default RegDns;
