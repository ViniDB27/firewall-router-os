import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import api from './utils/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Subnets() {

    const [subnets, setSubnets] = useState([]);

    useEffect(()=>{

        async function loadSubnets(){

            const response = await api.get("/subnets")
            .catch(async error=>{

                let errors = { ... error}

                if(errors.response.status == 401){

                    const { value: accept } = await  Swal.fire({

                        title: `Ops...`,
                        text: "Sua sessão inspirou!",
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

            if(response.status === 200){
                setSubnets(response.data)
            }
        }

        loadSubnets()
    },[]);

    async function deletarSubrede(event, id, name){

        event.preventDefault()

        const { value: accept } = await Swal.fire({

            title: `Você tem certeza que deseja exluir a Sub-rede ${name}?`,
            text: "Você não poderá reverter essa ação mais tarde!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Excluir'

        })

        if(accept){

            await api.delete(`/subnets/${id}`)
            .then(async response=>{
                await Swal.fire({
                    icon: 'success',
                    title: 'Show!',
                    text: response.data.message,
                })

                location.reload()

            })
            .catch(error=>{
                let errors = { ... error}

                if(errors.response.status == 422){



                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text:errors.response.data.message + ' ' + JSON.stringify(errors.response.data.errors),
                    })

                }else{

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text:error,
                    })

                }
            })

        }


    }

    return (
        <table className="table table-sm table-hover table-striped table-responsive-sm">
            <thead>
                <tr>
                    <th>
                        <div className="form-check">
                            <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </th>
                    <th scope="col">Nome</th>
                    <th scope="col">IP</th>
                    <th scope="col">Netmask</th>
                    <th scope="col">Local</th>
                    <th scope="col">Ativa</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    subnets.map(sub=>(
                        <tr key={sub.subnet.id} >
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                                </div>
                            </td>
                            <td>{sub.subnet.name}</td>
                            <td>{sub.subnet.ip}</td>
                            <td>{sub.netmask.mask}</td>
                            <td>{sub.local.name}</td>
                            <td>{(sub.subnet.active)?"SIM":"NÃO"}</td>
                            <td className="d-flex" >
                                <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                                <a onClick={e=>deletarSubrede(e, sub.subnet.id, sub.subnet.name)} ><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Subnets;

if (document.getElementById('subnets')) {
    ReactDOM.render(<Subnets />, document.getElementById('subnets'));
}
