import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import api from './utils/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Mikrotiks() {

    const [allMikrotiks, setAllMikrotiks] = useState([])

    useEffect(()=>{

        async function loadAllMikrotik(){
            const response = await api.get('/mikrotiks')
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
                setAllMikrotiks([... response.data])
            }

        }

        loadAllMikrotik()

    },[])



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
                <th scope="col">IP WAN</th>
                <th scope="col">IP LAN</th>
                <th scope="col">Gateway</th>
                <th scope="col">NetMask</th>
                <th scope="col">DNS 1</th>
                <th scope="col">DNS 2</th>
                <th scope="col">Subrede</th>
                <th scope="col">Opções</th>
            </tr>
        </thead>
        <tbody>
            {
                allMikrotiks.map(mk=>(
                    <tr key={mk.id}>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                            </div>
                        </td>
                        <td scope="col">{mk.name}</td>
                        <td scope="col">{mk.ip_wan}</td>
                        <td scope="col">{mk.ip_lan}</td>
                        <td scope="col">{mk.gateway}</td>
                        <td scope="col">{mk.netmask.mask}</td>
                        <td scope="col">{mk.dns1}</td>
                        <td scope="col">{mk.dns2}</td>
                        <td scope="col">{mk.subnet.name}</td>
                        <td className="d-flex" >
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Restaurar" >settings_backup_restore</i></a>
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Atualizar" >autorenew</i></a>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    );
}

export default Mikrotiks;

if (document.getElementById('mikrotiks')) {
    ReactDOM.render(<Mikrotiks />, document.getElementById('mikrotiks'));
}
