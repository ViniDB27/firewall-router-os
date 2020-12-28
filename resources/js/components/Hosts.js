import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import api from './utils/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Hosts(){

    const [allHost, setAllHost] = useState([])

    useEffect(()=>{

        async function loadAllHosts(){
            const response = await api.get('/hosts')
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
                setAllHost([... response.data])
            }

        }

        loadAllHosts()

    },[])

    async function deletarHost(event, id, name){

        event.preventDefault()

        const { value: accept } = await Swal.fire({

            title: `Você tem certeza que deseja exluir o host ${name}?`,
            text: "Você não poderá reverter essa ação mais tarde!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Excluir'

        })

        if(accept){

            await api.delete(`/hosts/${id}`)
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
                        <th scope="col">MAC</th>
                        <th scope="col">Mikrotik</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Skype</th>
                        <th scope="col">P. Baixas</th>
                        <th scope="col">P. Altas</th>
                        <th scope="col">Ativo</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {allHost.map(host=>(
                        <tr key={host.id} >
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                                </div>
                            </td>
                            <td scope="col">{host.name}</td>
                            <td scope="col">{host.ip}</td>
                            <td scope="col">{host.mac}</td>
                            <td scope="col">{host.mikrotik.name}</td>
                            <td scope="col">{host.permission.name}</td>
                            <td scope="col">{host.type.name}</td>
                            <td scope="col">{host.skype ? "SIM" : "NÃO"}</td>
                            <td scope="col">{host.lower_port ? "SIM" : "NÃO"}</td>
                            <td scope="col">{host.high_port ? "SIM" : "NÃO"}</td>
                            <td scope="col">{host.active ? "SIM" : "NÃO"}</td>
                            <td className="d-flex" scope="col">
                                <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                                <a onClick={e=>deletarHost(e, host.id, host.name)} className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                                <a className="mx-1" ><i className="material-icons text-body icons-table" title="Informações do Dispositivo" >computer</i></a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}

export default Hosts;

if (document.getElementById('hosts')) {
    ReactDOM.render(<Hosts />, document.getElementById('hosts'));
}
