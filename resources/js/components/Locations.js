import React from 'react';
import ReactDOM from 'react-dom';

function Locations(prop) {



    console.log(prop);


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

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>address</td>
                    <td>number</td>
                    <td>district</td>
                    <td>city</td>
                    <td>zip_code</td>
                    <td>uf</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>address</td>
                    <td>number</td>
                    <td>district</td>
                    <td>city</td>
                    <td>zip_code</td>
                    <td>uf</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>address</td>
                    <td>number</td>
                    <td>district</td>
                    <td>city</td>
                    <td>zip_code</td>
                    <td>uf</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>address</td>
                    <td>number</td>
                    <td>district</td>
                    <td>city</td>
                    <td>zip_code</td>
                    <td>uf</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                        </div>
                    </td>
                    <td>name</td>
                    <td>address</td>
                    <td>number</td>
                    <td>district</td>
                    <td>city</td>
                    <td>zip_code</td>
                    <td>uf</td>
                    <td className="d-flex" >
                        <a><i className="material-icons text-body icons-table mx-1" title="Editar" >create</i></a>
                        <a><i className="material-icons text-body icons-table mx-1" title="Excluir" >delete</i></a>
                    </td>
                </tr>

            </tbody>
        </table>
    );
}

export default Locations;

if (document.getElementById('locations')) {

    //const element = getElementById('locations');

    //const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Locations />, document.getElementById('locations'));
}
