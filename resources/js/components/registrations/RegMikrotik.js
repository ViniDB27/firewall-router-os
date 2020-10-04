import React, {useState} from 'react';

function RegMikrotik() {

    const [name, setName] =useState("")
    const [subrede, setSubrede] = useState("")
    const [ipWan, setIpWan] = useState("")
    const [ipLan, setIpLan] = useState("")
    const [gatway, setGatway] = useState("")
    const [netmask, setNetmask] = useState("")
    const [dns1, setDns1] = useState("")
    const [dns2, setDns2] = useState("")
    const [username, setUsername] = useState("admin")
    const [password, setPassword] = useState("")

    return (
        <form className="form-cad-mikrotik row" id="form-mikortik" >

            <div className="form-group name-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-name-mk" className="text-dark" >Nome do Mikrotik</label>
                <input type="text" className="form-control" id="input-name-mk" value={name} onChange={e=>{setName(e.target.value)}} />
            </div>

            <div className="form-group subnet-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="subnet-mk" className="text-dark" >Subrede</label>
                <select type="text" className="form-control" id="subnet-mk" value={subrede} onChange={e=>{setSubrede(e.target.value)}} >
                    <option >Escolha uma subrede...</option>
                </select>
            </div>

            <div className="form-group ip-lan-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-ip-wan-mk" className="text-dark" >IP WAN</label>
                <input type="text" className="form-control" id="input-ip-wan-mk" value={ipWan} onChange={e=>{setIpWan(e.target.value)}} />
            </div>

            <div className="form-group ip-lan-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-ip-lan-mk" className="text-dark" >IP LAN</label>
                <input type="text" className="form-control" id="input-ip-lan-mk" value={ipLan} onChange={e=>{setIpLan(e.target.value)}} />
            </div>

            <div className="form-group gateway-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-gateway-mk" className="text-dark" >Gateway</label>
                <input type="text" className="form-control" id="input-gateway-mk" value={gatway} onChange={e=>{setGatway(e.target.value)}} />
            </div>

            <div className="form-group netmask-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-mask-mk" className="text-dark" >Mascara de rede</label>
                <select type="text" className="form-control" id="input-mask-mk" value={netmask} onChange={e=>{setNetmask(e.target.value)}} >
                    <option value={24}>255.255.255.0</option>
                </select>
            </div>

            <div className="form-group dns1-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns1-mk" className="text-dark" >DNS 1</label>
                <input type="text" className="form-control" id="input-dns1-mk" value={dns1} onChange={e=>{setDns1(e.target.value)}} />
            </div>

            <div className="form-group dns2-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-dns2-mk" className="text-dark" >DNS 2</label>
                <input type="text" className="form-control" id="input-dns2-mk" value={dns2} onChange={e=>{setDns2(e.target.value)}} />
            </div>

            <div className="form-group username-mikrotik col-12 col-md-6 col-lg-4">
                <label htmlFor="input-username-mk" className="text-dark" >Username</label>
                <input type="text" className="form-control" id="input-username-mk" value={username} onChange={e=>{setUsername(e.target.value)}} />
            </div>

            <div className="form-group password-mikrotik  col-12 col-md-6 col-lg-4">
                <label htmlFor="input-password-mk" className="text-dark" >Senha do Mikrotik</label>
                <input type="password" className="form-control" id="input-password-mk" value={password} onChange={e=>{setPassword(e.target.value)}} />
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>

        </form>
    );
}

export default RegMikrotik;
