import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Recover() {

    const [email, setEmail] = useState("")

    return (
        <div className="recover-body container-fluid ">
            <div className="col-md-4 row">
                <div className="recover-box container">
                    <div className="row">
                        <p className="text-dark">Digite o seu e-mail cadastrado <br/>
                            e enviaremos a sua senha</p>
                    </div>
                    <div className="row">
                        <form>
                            <div className="recoverEmail form-group">
                                <label for="email-recove">Email</label>
                                <input type="email" className="form-control" id="email-recover" value={email} onChange={e=>{setEmail(e.target.value)}} />
                            </div>

                            <button type="submit" class="btn btn-primary col-md-12">Enviar</button>
                            <a href="/login" >voltar para login</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recover;

if (document.getElementById('recover')) {
    ReactDOM.render(<Recover />, document.getElementById('recover'));
}
