import React from 'react';
import ReactDOM from 'react-dom';

function Hosts() {
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
                        <th scope="col">Netmask</th>
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

                    <tr>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                            </div>
                        </td>
                        <td scope="col">name</td>
                        <td scope="col">ip</td>
                        <td scope="col">mac</td>
                        <td scope="col">netmask</td>
                        <td scope="col">mikrotik name</td>
                        <td scope="col">nivel</td>
                        <td scope="col">type name</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td className="d-flex" scope="col">
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                            <a onClick={()=>removeHost(host.id)} className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Informações do Dispositivo" >computer</i></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                            </div>
                        </td>
                        <td scope="col">name</td>
                        <td scope="col">ip</td>
                        <td scope="col">mac</td>
                        <td scope="col">netmask</td>
                        <td scope="col">mikrotik name</td>
                        <td scope="col">nivel</td>
                        <td scope="col">type name</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td className="d-flex" scope="col">
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                            <a onClick={()=>removeHost(host.id)} className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Informações do Dispositivo" >computer</i></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                            </div>
                        </td>
                        <td scope="col">name</td>
                        <td scope="col">ip</td>
                        <td scope="col">mac</td>
                        <td scope="col">netmask</td>
                        <td scope="col">mikrotik name</td>
                        <td scope="col">nivel</td>
                        <td scope="col">type name</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td className="d-flex" scope="col">
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                            <a onClick={()=>removeHost(host.id)} className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Informações do Dispositivo" >computer</i></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                            </div>
                        </td>
                        <td scope="col">name</td>
                        <td scope="col">ip</td>
                        <td scope="col">mac</td>
                        <td scope="col">netmask</td>
                        <td scope="col">mikrotik name</td>
                        <td scope="col">nivel</td>
                        <td scope="col">type name</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td scope="col">SIM</td>
                        <td className="d-flex" scope="col">
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                            <a onClick={()=>removeHost(host.id)} className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                            <a className="mx-1" ><i className="material-icons text-body icons-table" title="Informações do Dispositivo" >computer</i></a>
                        </td>
                    </tr>

                </tbody>
            </table>
    );
}

export default Hosts;

if (document.getElementById('hosts')) {
    ReactDOM.render(<Hosts />, document.getElementById('hosts'));
}
