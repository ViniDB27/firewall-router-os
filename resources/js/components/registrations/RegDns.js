import React, {useState} from 'react';

function RegDns() {

    const [dns1, setDns1] = useState("")
    const [dns2, setDns2] = useState("")

    return (
        <form className="form-cad-dns row" id="form-dns">

            <div className="form-group dns1 col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns1-dns" className="text-dark" >DNS 1</label>
                <input type="text" className="form-control" id="input-dns1-dns" value={dns1} onChange={e=>{setDns1(e.target.value)}} />
            </div>

            <div className="form-group dns2-mikrotik dns2 col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns2-dns" className="text-dark" >DNS 2</label>
                <input type="text" className="form-control" id="input-dns2-dns" value={dns2} onChange={e=>{setDns2(e.target.value)}} />
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>

        </form>
    );
}

export default RegDns;
