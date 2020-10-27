import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import api from './utils/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Locations(){

    const [locations, setLocations] = useState([]);

    useEffect(()=>{

        async function loadLocations(){

            const response = await api.get("/locations")
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


            if(response.status === 200){
                setLocations(response.data)
            }
        }

        loadLocations()
    },[]);



    return (

        <table className="container-fluid table table-sm table-hover table-striped table-responsive-sm">
            <thead >
                <tr>
                    <th>
                        <div className="form-check">
                            <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </th>
                    <th scope="col">Nome</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Número</th>
                    <th scope="col">Bairro</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">CEP</th>
                    <th scope="col">UF</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    locations.map(local=>(
                        <tr key={local.id}>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                                </div>
                            </td>
                            <td>{local.name}</td>
                            <td>{local.address}</td>
                            <td>{local.number}</td>
                            <td>{local.district}</td>
                            <td>{local.city}</td>
                            <td>{local.zip_code}</td>
                            <td>{local.uf}</td>
                            <td className="d-flex" >
                                <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                                <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    );
}

export default Locations;

if (document.getElementById('locations')) {
    ReactDOM.render(<Locations />, document.getElementById('locations'));
}


