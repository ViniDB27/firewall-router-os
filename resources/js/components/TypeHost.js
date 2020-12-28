import React from 'react';
import ReactDOM from 'react-dom';

function TypeHost() {





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
                <tr >
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" id="select-all" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                        <td><div className="item-table">type.type</div></td>
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

export default TypeHost;

if (document.getElementById('typehost')) {
    ReactDOM.render(<TypeHost />, document.getElementById('typehost'));
}
