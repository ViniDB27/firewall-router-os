import React from 'react';
import ReactDOM from 'react-dom';

function Mikrotiks() {
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

            <tr>
                <td>
                    <div className="form-check">
                        <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                    </div>
                </td>
                <td scope="col">name</td>
                <td scope="col">ipWan</td>
                <td scope="col">ipLan</td>
                <td scope="col">gateway</td>
                <td scope="col">netmask</td>
                <td scope="col">dns 1</td>
                <td scope="col">dns2</td>
                <td scope="col">subnet name</td>
                <td className="d-flex" >
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Restaurar" >settings_backup_restore</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Atualizar" >autorenew</i></a>
                </td>
            </tr>

            <tr>
                <td>
                    <div className="form-check">
                        <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                    </div>
                </td>
                <td scope="col">name</td>
                <td scope="col">ipWan</td>
                <td scope="col">ipLan</td>
                <td scope="col">gateway</td>
                <td scope="col">netmask</td>
                <td scope="col">dns 1</td>
                <td scope="col">dns2</td>
                <td scope="col">subnet name</td>
                <td className="d-flex" >
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Restaurar" >settings_backup_restore</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Atualizar" >autorenew</i></a>
                </td>
            </tr>

            <tr>
                <td>
                    <div className="form-check">
                        <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                    </div>
                </td>
                <td scope="col">name</td>
                <td scope="col">ipWan</td>
                <td scope="col">ipLan</td>
                <td scope="col">gateway</td>
                <td scope="col">netmask</td>
                <td scope="col">dns 1</td>
                <td scope="col">dns 2</td>
                <td scope="col">subnet name</td>
                <td className="d-flex" >
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Restaurar" >settings_backup_restore</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Atualizar" >autorenew</i></a>
                </td>
            </tr>

            <tr>
                <td>
                    <div className="form-check">
                        <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                    </div>
                </td>
                <td scope="col">name</td>
                <td scope="col">ipWan</td>
                <td scope="col">ipLan</td>
                <td scope="col">gateway</td>
                <td scope="col">netmask</td>
                <td scope="col">dns 1</td>
                <td scope="col">dns2</td>
                <td scope="col">subnet name</td>
                <td className="d-flex" >
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Restaurar" >settings_backup_restore</i></a>
                    <a className="mx-1" ><i className="material-icons text-body icons-table" title="Atualizar" >autorenew</i></a>
                </td>
            </tr>

        </tbody>
    </table>
    );
}

export default Mikrotiks;

if (document.getElementById('mikrotiks')) {
    ReactDOM.render(<Mikrotiks />, document.getElementById('mikrotiks'));
}
