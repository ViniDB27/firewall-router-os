import React from 'react';
import ReactDOM from 'react-dom';

function Domains() {
    return (
        <table className="table table-sm table-hover table-striped table-responsive-sm">
             <thead>
                    <tr>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                            </div>
                        </td>
                        <th><div className="item-table">Domínios</div></th>
                        <th><div className="item-table">Opções</div></th>
                    </tr>
                </thead>
                <tbody className="mk-table">
                <tr >
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                        <td><div className="item-table">dominio.com.br</div></td>
                        <td>
                            <div className="item-table">
                                <a href="#"><i className="material-icons text-body icons-table" title="Editar" >create</i></a>
                                <a href="#"><i className="material-icons text-body icons-table" title="Excluir" >delete</i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
        </table>
    );
}

export default Domains;

if (document.getElementById('domains')) {
    ReactDOM.render(<Domains />, document.getElementById('domains'));
}
