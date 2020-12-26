import React, {useState, useEffect} from 'react';
import api from '../utils/axios'
import IsIp from '../utils/IsIp'

import Swal from 'sweetalert2/dist/sweetalert2.js'


function RegSubnet() {

    const [allLocations, setAllLocations] = useState([])
    const [allNetmask, setAllNetmask] = useState([])

    useEffect(()=>{

        async function loaderInitialOptions() {

            const response = await api.get("/locations")
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


            if(response.status === 200){
                setAllLocations([... response.data])
            }


            const responseNetmask = await api.get("/netmask")

            if(responseNetmask.status === 200){
                setAllNetmask([... responseNetmask.data])
            }

        }

        loaderInitialOptions()

    },[])


    const [name, setName] = useState('')
    const [ip, setIP] = useState('')
    const [netmask, setNetmask] = useState(24)
    const [localId, setLocalId] = useState('')
    const [access, setAccess] = useState(false)
    const [active, setActive] = useState(true)

    function alterchk(chk){
        if(chk === 'access'){
            setAccess(!access)
        }else if(chk === 'active'){
            setActive(!active)
        }
    }

    async function registerNewSubnet(event) {

        event.preventDefault()

        if(name !== "" && ip !==""){

            if(IsIp(ip)){

                await api.post('/subnets',{
                    name,
                    ip,
                    netmask_bits:netmask,
                    local_id:localId,
                    access,
                    active
                }).then((response)=>{
                    Swal.fire({
                        icon: 'success',
                        title: 'Show!',
                        text: response.data.message,
                    })

                    setName('')
                    setIP('')

                }).catch(error=>{
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
                    text: "O IP informado não é valido",
                })
            }

        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: "Não podemos cadastrar a sub-rede se todos os campos não estiverem preenchidos!",
            })
        }

    }

    return (
        <form className="form-cad-subnet row" id="form-subnet"  onSubmit={e=>registerNewSubnet(e)}>

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
                    {allNetmask.map(mask=>(
                        <option key={mask.id} value={mask.bits} >{mask.mask}/{mask.bits}</option>
                    ))}
                </select>
            </div>

            <div className="form-group local-subnet col-12 col-md-6">
                <label htmlFor="local-subnet" className="text-dark" >Local</label>
                <select type="text" className="form-control" id="local-subnet" value={localId} onChange={e=>{setLocalId(e.target.value)}} >
                    <option >Selecione o local dessa subrede...</option>
                    {allLocations.map(local=>(
                        <option key={local.id} value={local.id} >{local.name} - {local.address}</option>
                    ))}
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
