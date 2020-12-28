import React, {useState} from 'react'
import api from '../utils/axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function RegTypeHost() {

    const [type, setType] = useState("")

    async function registerNewTypeHost(event){

        event.preventDefault()

        if(type != ""){

            await api.post('/host-type',{
                name:type,
            })
            .then((response)=>{

                Swal.fire({
                    icon: 'success',
                    title: 'Show!',
                    text: response.data.message,
                })

                setType("")
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
                text: "O campo precisa estar preenchido para poder cadastrar um tipo de host",
            })
        }

    }



    return (
        <form className="row" onSubmit={e=>registerNewTypeHost(e)}>
            <div className="form-group col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <label htmlFor="type-host" className="text-dark" >Tipo de Host</label>
                <input type="text" className="form-control" id="type-host" value={type} onChange={e=>{setType(e.target.value)}} />
            </div>

            <button type="submit" className="btn btn-primary col-10 offset-1 col-md-8 offset-md-2 col-lg-4 offset-lg-8">Cadastrar</button>
        </form>
    );
}

export default RegTypeHost;

