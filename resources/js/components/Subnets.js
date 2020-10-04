import React from 'react';
import ReactDOM from 'react-dom';

function Subnets() {
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
                    <th scope="col">NetMask</th>
                    <th scope="col">Local</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Ativa</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>ip</td>
                    <td>netMask</td>
                    <td>local name</td>
                    <td>typeSubnet</td>
                    <td>"SIM"</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>ip</td>
                    <td>netMask</td>
                    <td>local name</td>
                    <td>typeSubnet</td>
                    <td>"SIM"</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>ip</td>
                    <td>netMask</td>
                    <td>local name</td>
                    <td>typeSubnet</td>
                    <td>"SIM"</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

            </tbody>
        </table>
    );
}

export default Subnets;

if (document.getElementById('subnets')) {
    ReactDOM.render(<Subnets />, document.getElementById('subnets'));
}
