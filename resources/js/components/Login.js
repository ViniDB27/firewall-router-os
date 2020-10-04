import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//assets import
import logoLages from '../../image/logo-lages-sc-sem-fundo.webp'


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="login-body container-fluid">
                <div className="row">
                    <div className="login-box container">
                        <div className="row">
                            <img src={logoLages} className="fluid"  alt="bandeira de lages" />
                        </div>
                        <div className="row">
                            <form onSubmit="{execLogin}" >
                                <div className="loginEmail form-group">
                                    <label for="email-login">Email</label>
                                    <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" value={email} onChange={e=>{setEmail(e.target.value)}} />
                                    <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu email com ninguém.</small>
                                </div>

                                <div class="form-group">
                                    <label for="Password-login">Senha</label>
                                    <input type="password" class="form-control" id="Password-login" value={password} onChange={e=>{setPassword(e.target.value)}} />
                                </div>

                                <button type="submit" class="btn btn-primary col-md-12">Entrar</button>

                                <a href="/recover">esqueci minha senha</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}


