import React from 'react';
import ReactDOM from 'react-dom';
 
function MainNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-menu">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <li className="nav-item dropdown icons-container d-md-none">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons text-light icon-settings" title="Settings" >settings</i>
                </a>
                <a className="nav-link"><i onClick={() => setToken(null)} className="material-icons text-light icon-settings"title="Logout">exit_to_app</i></a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item text-dark" href="/profile">Perfil</a>
                    <a className="dropdown-item text-dark" href="/settings">Configurações</a>
                    <a className="dropdown-item text-dark" href="/register">Cadastrar usuário</a>
                </div>
            </li>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link text-light" href="/dashboard">Painel</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/locations">Locais</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/subnets">Subredes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/mikrotiks">Mikrotiks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/hosts">Hosts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/registrations">Cadastros</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Outros
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/host-type">Tipos de hosts</a>
                        <a className="dropdown-item" href="/domains">Domínios</a>
                        <a className="dropdown-item" href="/routes">Rotas</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Relatórios
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/host-subnet">Hosts da rede</a>
                        <a className="dropdown-item" href="/host-ip">Hosts por IP</a>
                    </div>
                </li>
                </ul>
                <li className="nav-item dropdown icons-container d-none d-md-flex">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons text-light icon-settings" title="Settings" >settings</i>
                    </a>
                    <a className="nav-link"><i onClick={() => setToken(null)} className="material-icons text-light icon-settings"title="Logout">exit_to_app</i></a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item text-dark" href="/profile">Perfil</a>
                        <a className="dropdown-item text-dark" href="/settings">Configurações</a>
                        <a className="dropdown-item text-dark" href="/register">Cadastrar usuário</a>
                    </div>
                </li>
            </div>
        </nav>
    );
}

export default MainNavbar;

if (document.getElementById('main-navbar')) {
    ReactDOM.render(<MainNavbar />, document.getElementById('main-navbar'));
}
