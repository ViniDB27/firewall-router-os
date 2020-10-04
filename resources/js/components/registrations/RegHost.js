import React, {useState} from 'react';

function RegHost() {

    const [name, setName] = useState("")
    const [mikrotik, setMikrotik] = useState("")
    const [ip, setIp] = useState("")
    const [mac, setMac] = useState("")
    const [gatway, setGatway] = useState("")
    const [netmask, setNetmask] = useState(24)
    const [dns1, setDns1] = useState("")
    const [dns2, setDns2] = useState("")
    const [type, setType] = useState("")
    const [fixo, setFixo] = useState(false)
    const [domain, setDomain] = useState("")
    const [nivel, setNivel] = useState("")
    const [skype, setSkype] = useState(true)
    const [lowPort, setLowPort] = useState(true)
    const [highPort, setHighPort] = useState(true)
    const [active, setActive] = useState(true)

    function invertCheked(chkname){
        if(chkname === "skype"){
            setSkype(!skype)
        }else if(chkname === "lowport"){
            setLowPort(!lowPort)
        }else if(chkname === "highport"){
            setHighPort(!highPort)
        }else if(chkname === "active"){
            setActive(!active)
        }
    }

    return (
        <form className="form-cad-host row" id="form-host"  >

            <div className="form-group name-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-name-host" className="text-dark" >Nome do Host</label>
                <input type="text" className="form-control" id="input-name-host" value={name} onChange={e=>{setName(e.target.value)}} />
            </div>

            <div className="form-group mikrotik-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-mikrotik-host" className="text-dark" >Mikrotik</label>
                <select type="text" className="form-control" id="input-mikrotik-host" value={mikrotik} onChange={e=>{setMikrotik(e.target.value)}} >
                    <option >Selecione uma mikrotik...</option>
                </select>
            </div>

            <div className="form-group ip-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-ip-host" className="text-dark" >IP</label>
                <input type="text" className="form-control" id="input-ip-host" value={ip} onChange={e=>{setIp(e.target.value)}} />
            </div>

            <div className="form-group mac-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-mac-host" className="text-dark" >MAC</label>
                <input type="text" className="form-control" id="input-mac-host" value={mac} onChange={e=>{setMac(e.target.value)}} />
            </div>

            <div className="form-group mac-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-mac-host" className="text-dark" >Gateway</label>
                <input type="text" className="form-control" id="input-mac-host" value={gatway} onChange={e=>{setGatway(e.target.value)}} />
            </div>

            <div className="form-group netmask-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-mask-host" className="text-dark" >Mascara de rede</label>
                <select type="text" className="form-control" id="input-mask-host" value={netmask} onChange={e=>{setNetmask(e.target.value)}} >
                    <option value={24}>255.255.255.0</option>
                </select>
            </div>

            <div className="form-group dns1-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns1-host" className="text-dark" >DNS 1</label>
                <input type="text" className="form-control" id="input-dns1-host" value={dns1} onChange={e=>{setDns1(e.target.value)}} />
            </div>

            <div className="form-group dns2-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns2-host" className="text-dark" >DNS 2</label>
                <input type="text" className="form-control" id="input-dns2-host" value={dns2} onChange={e=>{setDns2(e.target.value)}} />
            </div>

            <div className="form-group type-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-type-host" className="text-dark" >Tipo do host</label>
                <select type="text" className="form-control" id="input-type-host" value={type} onChange={e=>{setType(e.target.value)}} >
                    <option >Selecione o tipo do host...</option>
                </select>
            </div>

            <div className="form-group dominio-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-domain-host" className="text-dark" >Domínio</label>
                <select type="text" className="form-control" id="input-domain-host" value={domain} onChange={e=>{setDomain(e.target.value)}} >
                    <option >Selecione um domínio</option>
                </select>
            </div>

            <div className="form-group nivel-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-nivel-host" className="text-dark" >Nivel de acesso</label>
                <select type="text" className="form-control" id="input-nivel-host" value={nivel} onChange={e=>{setNivel(e.target.value)}} >
                    <option >Selecione um nivel...</option>
                </select>
            </div>

            <div className="form-group fixed-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-fixed-host" className="text-dark" >IP FIXO</label>
                <select type="text" className="form-control" id="input-fixed-host" value={fixo} onChange={e=>{setFixo(e.target.value)}} >
                    <option value={false}>NÃO</option>
                    <option value={true}>SIM</option>
                </select>
            </div>

            <div className="form-group skype col-6 col-md-2 ml-4" >
                <input className="form-check-input" type="checkbox" id="input-skype-host" checked={skype} onClick={()=>{invertCheked("skype")}}  />
                <label htmlFor="input-skype-host" className="text-dark" >Skype</label>
            </div>

            <div className="form-group lower-port col-6 col-md-3" >
                <input className="form-check-input" type="checkbox" id="input-lower-host" checked={lowPort}  onClick={()=>{invertCheked("lowport")}}  />
                <label htmlFor="input-lower-host" className="text-dark" >Portas Baixas</label>
            </div>

            <div className="form-group high-port col-6 col-md-3" >
                <input className="form-check-input" type="checkbox" id="input-high-host" checked={highPort}  onClick={()=>{invertCheked("highport")}} />
                <label htmlFor="input-high-host" className="text-dark" >Portas Altas</label>
            </div>

            <div className="form-group active col-6 col-md-2" >
                <input className="form-check-input" type="checkbox" id="input-active-host" checked={active}  onClick={()=>{invertCheked("active")}}  />
                <label htmlFor="input-active-host" className="text-dark" >Ativo</label>
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>

        </form>
    );
}

export default RegHost;

