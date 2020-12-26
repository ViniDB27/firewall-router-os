import React, {useState, useEffect} from 'react';

function RegDomain() {

    const [domain, setDomain] = useState("")



    return (
        <form className="row">
            <div className="form-group col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <label htmlFor="domain" className="text-dark" >Domínio</label>
                <input type="text" className="form-control" id="domain" value={domain} onChange={e=>{setDomain(e.target.value)}} />
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>
        </form>
    );
}

export default RegDomain;
