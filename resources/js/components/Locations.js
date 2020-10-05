import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import api from './utils/axios'

function Locations(){

    const [locations, setLocations] = useState([]);

    useEffect(()=>{

        async function loadLocations(){

            const response = await api.get("/locations");

            setLocations(response.data)

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
                        <tr>
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


