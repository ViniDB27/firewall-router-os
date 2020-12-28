import React, {useEffect, useState} from 'react';
import api from '../utils/axios'
import IsIp from '../utils/IsIp'
import IsMac from '../utils/IsMac'

import Swal from 'sweetalert2/dist/sweetalert2.js'

function RegHost() {

    const [allMikrotiks, setAllMikrotiks] = useState([])
    const [allDomains, setAllDomains] = useState([])
    const [allTypeHost, setAllTypeHost] = useState([])
    const [allNetmask, setAllNetmask] = useState([])
    const [allPermissions, setAllPermissions] = useState([])

    useEffect(()=>{
        async function loadDependencias(){

            const mikrotikResponse = await api.get('/mikrotiks')
            .catch(async error=>{

                let errors = { ... error}

                if(errors.response.status == 401){

                    const { value: accept } = await  Swal.fire({

                        title: `Ops...`,
                        text: "Sua sessão inspirou!",
                        icon: 'error',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Voltar ao Login!'

                    })

                    window.location.href = "/login";

                }else{

                    console.log(errors)

                    Swal.fire({

                        title: `Ops...`,
                        text: error,
                        icon: 'error',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'

                    })
                }


            })


            //load de mikrotiks
            if(mikrotikResponse.status == 200){
                setAllMikrotiks(mikrotikResponse.data)
            }

            //load de dominios
            const domainResponse = await api.get('/domains')
            //console.log("Domains: ",domainResponse)
            if(domainResponse.status == 200){
                setAllDomains(domainResponse.data)
            }


            //load de typeHost
            const typeHostResponse = await api.get('/host-type')
            if(typeHostResponse.status == 200){
                setAllTypeHost(typeHostResponse.data)
            }

            //load de Netmasks
            const responseNetmask = await api.get("/netmask")
            if(responseNetmask.status === 200){
                setAllNetmask([... responseNetmask.data])
            }

            //load de permissions
            const responsePermissions = await api.get("/permissions")
            if(responsePermissions.status === 200){
                setAllPermissions([... responsePermissions.data])
            }

        }

        loadDependencias()

    },[])

    const [name, setName] = useState("")
    const [mikrotik, setMikrotik] = useState("")
    const [ip, setIp] = useState("")
    const [mac, setMac] = useState("")
    const [gatway, setGatway] = useState("")
    const [netmask, setNetmask] = useState(24)
    const [dns1, setDns1] = useState("")
    const [dns2, setDns2] = useState("")
    const [type, setType] = useState("")
    const [domain, setDomain] = useState("")
    const [nivel, setNivel] = useState("")
    const [fixo, setFixo] = useState(false)
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


    async function registerNewHost(event){

        event.preventDefault()

        if(name != "" && mikrotik != "" && ip != "" && mac != "" && gatway != "" && netmask != "" && dns1 != "" && dns2 != "" && type != "" && domain != "" && nivel != "" ){

            if(IsIp(ip)){

                if(IsIp(gatway)){

                    if(IsIp(dns1)){

                        if(IsIp(dns2)){

                            if(IsMac(mac)){

                                //request
                                await api.post('/hosts',{

                                    name:name,
                                    mikrotik_id:mikrotik,
                                    mac:mac,
                                    ip:ip,
                                    gateway:gatway,
                                    netmask_bits:netmask,
                                    dns1:dns1,
                                    dns2:dns2,
                                    domain_id:domain,
                                    host_type_id:type,
                                    host_permission_id:nivel,
                                    skype:skype,
                                    lower_port:lowPort,
                                    high_port:highPort,
                                    fixed:fixo,
                                    active:active
                                })
                                .then(response=>{
                                    console.log(response)
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Show!',
                                        text: response.data.message,
                                    })
                                })
                                .catch(error=>{
                                    let errors = { ... error}

                                    if(errors.response.status == 422){



                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text:errors.response.data.message + ' ' + JSON.stringify(errors.response.data.errors),
                                        })

                                    }else{

                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text:error,
                                        })

                                    }
                                })

                            }else{
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Oops...',
                                    text: "O MAC informado não é valido",
                                })
                            }



                        }else{
                            Swal.fire({
                                icon: 'warning',
                                title: 'Oops...',
                                text: "O DNS 2 informado não é valido",
                            })
                        }

                    }else{
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oops...',
                            text: "O DNS 1 informado não é valido",
                        })
                    }

                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: "O Gateway informado não é valido",
                    })
                }

            }else{
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: "O IP informado não é valido",
                })
            }

        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: "Não podemos cadastrar o Host se todos os campos não estiverem preenchidos!",
            })
        }

    }


    return (
        <form className="form-cad-host row" id="form-host" onSubmit={e=>registerNewHost(e)} >

            <div className="form-group name-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-name-host" className="text-dark" >Nome do Host</label>
                <input type="text" className="form-control" id="input-name-host" value={name} onChange={e=>{setName(e.target.value)}} />
            </div>

            <div className="form-group mikrotik-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-mikrotik-host" className="text-dark" >Mikrotik</label>
                <select type="text" className="form-control" id="input-mikrotik-host" value={mikrotik} onChange={e=>{setMikrotik(e.target.value)}} >
                    <option >Selecione uma mikrotik...</option>
                    {allMikrotiks.map(mk=>(
                        <option key={mk.id} value={mk.id} >{mk.name}</option>
                    ))}
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
                    {allNetmask.map(mask=>(
                        <option key={mask.id} value={mask.bits} >{mask.mask}/{mask.bits}</option>
                    ))}
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
                    {allTypeHost.map(th=>(
                        <option key={th.id} value={th.id}>{th.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group dominio-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-domain-host" className="text-dark" >Domínio</label>
                <select type="text" className="form-control" id="input-domain-host" value={domain} onChange={e=>{setDomain(e.target.value)}} >
                    <option >Selecione um domínio</option>
                    {allDomains.map(dmn=>(
                        <option key={dmn.id} value={dmn.id} >{dmn.domain}</option>
                    ))}
                </select>
            </div>

            <div className="form-group nivel-host col-12 col-md-6 col-lg-4">
                <label htmlFor="input-nivel-host" className="text-dark" >Nivel de acesso</label>
                <select type="text" className="form-control" id="input-nivel-host" value={nivel} onChange={e=>{setNivel(e.target.value)}} >
                    <option >Selecione um nivel...</option>
                    {allPermissions.map(prm=>(
                        <option key={prm.id} value={prm.id} >{prm.name}</option>
                    ))}
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

