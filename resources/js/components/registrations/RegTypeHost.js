import React, {useState} from 'react';

function RegTypeHost() {

    const [type, setType] = useState("")

    return (
        <form className="row">
            <div className="form-group col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <label htmlFor="type-host" className="text-dark" >Tipo de Host</label>
                <input type="text" className="form-control" id="type-host" value={type} onChange={e=>{setType(e.target.value)}} />
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>
        </form>
    );
}

export default RegTypeHost;

