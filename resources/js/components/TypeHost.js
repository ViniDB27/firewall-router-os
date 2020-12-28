import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import api from './utils/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function TypeHost() {

    const [allTypeHost, setAllTypeHost] = useState([])

    useEffect(()=>{

        async function loadAllTypeHosts(){
            const response = await api.get('/host-type')
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
                setAllTypeHost([... response.data])
            }

        }

        loadAllTypeHosts()

    },[])


    async function deletarTypeHost(event, id, name){

        event.preventDefault()

        const { value: accept } = await Swal.fire({

            title: `Você tem certeza que deseja exluir o Tipo de Host ${name}?`,
            text: "Você não poderá reverter essa ação mais tarde!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Excluir'

        })

        if(accept){

            await api.delete(`/host-type/${id}`)
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
                        <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                            </div>
                        </td>
                        <th><div className="item-table">Tipo</div></th>
                        <th><div className="item-table">Opções</div></th>
                    </tr>
                </thead>
                <tbody className="mk-table">
                    {allTypeHost.map(type=>(
                        <tr key={type.id}>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                                </div>
                            </td>
                            <td><div className="item-table">{type.name}</div></td>
                            <td>
                                <div className="item-table">
                                    <a href="#"><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                                    <a onClick={e=>deletarTypeHost(e, type.id, type.name)}><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
    );
}

export default TypeHost;

if (document.getElementById('typehost')) {
    ReactDOM.render(<TypeHost />, document.getElementById('typehost'));
}
