import React, {useState} from 'react';

function RegLocal() {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [district, setDisctric] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [uf, setUF] = useState("SC")
    const [active, setActive] = useState(true)

    function alterActive(){
            setActive(!active)
    }

    return (
        <form className="form-cad-local row" id="form-local" >

            <div className="form-group name-local col-12 col-md-6 col-lg-4">
                <label htmlFor="input-name-local" className="text-dark" >Nome do Local</label>
                <input type="text" className="form-control" id="input-name-local" value={name} onChange={e=>{setName(e.target.value)}}  />
            </div>

            <div className="form-group address-local col-12 col-md-6 col-lg-8" >
                <label htmlFor="input-address" className="text-dark" >Endereço</label>
                <input type="text" className="form-control" id="input-address" value={address} onChange={e=>{setAddress(e.target.value)}}  />
            </div>

            <div className="form-group number-local col-12 col-md-6 col-lg-3" >
                <label htmlFor="input-number" className="text-dark" >Número</label>
                <input type="text" className="form-control" id="input-number" value={number} onChange={e=>{setNumber(e.target.value)}}  />
            </div>

            <div className="form-group district-local col-12 col-md-6 col-lg-3" >
                <label htmlFor="input-district" className="text-dark" >Bairro</label>
                <input type="text" className="form-control" id="input-district" value={district} onChange={e=>{setDisctric(e.target.value)}}  />
            </div>

            <div className="form-group city-local col-12 col-md-6 col-lg-3" >
                <label htmlFor="input-city" className="text-dark" >Cidade</label>
                <input type="text" className="form-control" id="input-city" value={city} onChange={e=>{setCity(e.target.value)}}  />
            </div>

            <div className="form-group zip-code-local col-12 col-md-6 col-lg-3" >
                <label htmlFor="input-zip-code" className="text-dark" >CEP</label>
                <input type="text" className="form-control" id="input-zip-code" value={zipCode} onChange={e=>{setZipCode(e.target.value)}}  />
            </div>

            <div className="form-group uf-local col-12 col-md-6 col-lg-3" >
                <label htmlFor="input-uf" className="text-dark" >UF</label>
                <select className="form-control" id="input-uf" value={uf} onChange={e=>{setUF(e.target.value)}}>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </select>
            </div>

            <div className="form-group chk-local col-12 ml-4" >
                <input className="form-check-input" type="checkbox" id="input-active" checked={active} onClick={alterActive}  />
                <label htmlFor="input-active" className="text-dark" >Ativo</label>
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>

        </form>
    );
}

export default RegLocal;
