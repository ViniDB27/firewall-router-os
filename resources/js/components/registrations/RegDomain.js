import React, {useState} from 'react';
import api from '../utils/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function RegDomain() {

    const [domain, setDomain] = useState("")

    async function registerNewDomain(event){
        event.preventDefault()

        if(domain !=""){
            api.post('/domains',{
                domain,
            })
            .then((response)=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Show!',
                    text: response.data.message,
                })

                setDomain("")
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
                text: "O campo precisa estar preenchido para poder cadastrar um domínio",
            })
        }


    }

    return (
        <form className="row" onSubmit={e=>registerNewDomain(e)} >
            <div className="form-group col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <label htmlFor="domain" className="text-dark" >Domínio</label>
                <input type="text" className="form-control" id="domain" value={domain} onChange={e=>{setDomain(e.target.value)}} />
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>
        </form>
    );
}

export default RegDomain;
