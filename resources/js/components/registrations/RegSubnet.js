import React, {useState} from 'react';

function RegSubnet() {

    const [name, setName] = useState('')
    const [ip, setIP] = useState('')
    const [netmask, setNetmask] = useState(24)
    const [localId, setLocalId] = useState('')
    const [access, setAccess] = useState(true)
    const [active, setActive] = useState(true)

    function alterchk(chk){
        if(chk === 'access'){
            setAccess(!access)
        }else if(chk === 'active'){
            setActive(!active)
        }
    }


    return (
        <form className="form-cad-subnet row" id="form-subnet" >

            <div className="form-group name-subnet col-12 col-md-6">
                <label htmlFor="name-subnet" className="text-dark" >Nome da Subrede</label>
                <input type="text" className="form-control" id="name-subnet" value={name} onChange={e=>{setName(e.target.value)}} />
            </div>

            <div className="form-group ip-subnet col-12 col-md-6">
                <label htmlFor="ip-subnet" className="text-dark" >IP</label>
                <input type="text" className="form-control" id="ip-subnet" value={ip} onChange={e=>{setIP(e.target.value)}} />
            </div>

            <div className="form-group netmask-subnet col-12 col-md-6">
                <label htmlFor="mask-subnet" className="text-dark" >Mascara de rede</label>
                <select type="text" className="form-control" id="mask-subnet" value={netmask} onChange={e=>{setNetmask(e.target.value)}} >
                    <option value={24}>255.255.255.0</option>
                </select>
            </div>

            <div className="form-group local-subnet col-12 col-md-6">
                <label htmlFor="local-subnet" className="text-dark" >Local</label>
                <select type="text" className="form-control" id="local-subnet" value={localId} onChange={e=>{setLocalId(e.target.value)}} >
                    <option >Selecione o local dessa subrede...</option>
                </select>
            </div>

            <div className="form-group chk col-6 col-md-5 col-lg-4 ml-4" >
                <input className="form-check-input" type="checkbox" id="input-access" checked={access} onClick={()=>alterchk('access')}  />
                <label htmlFor="input-access" className="text-dark" >Acesso as outras subredes</label>
            </div>

            <div className="form-group chk col-6 col-md-7 col-lg-6" >
                <input className="form-check-input" type="checkbox" id="input-active" checked={active} onClick={()=>alterchk('active')}  />
                <label htmlFor="input-active" className="text-dark" >Active</label>
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>

        </form>
    );
}

export default RegSubnet;
