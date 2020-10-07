import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import api from './utils/axios'

function Subnets() {

    const [subnets, setSubnets] = useState([]);

    useEffect(()=>{

        async function loadSubnets(){

            const response = await api.get("/subnets");

            if(response.status === 200){
                setSubnets(response.data)
            }
        }

        loadSubnets()
    },[]);


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
                                <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
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
