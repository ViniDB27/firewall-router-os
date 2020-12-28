import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//imports components
import RegLocal from './registrations/RegLocal'
import RegSubnet from './registrations/RegSubnet'
import RegMikrotik from './registrations/RegMikrotik'
import RegDns from './registrations/RegDns'
import RegHost from './registrations/RegHost'
import RegTypeHost from './registrations/RegTypeHost'
import RegDomain from './registrations/RegDomain'

function Registrations() {

    const [cadIsVisible, setCadIsVisible] = useState([])

    function showFormCad(idForm, idIcon){
        const icone = document.getElementById(idIcon);
        const form = document.getElementById(idForm);
        const hidden = form.getAttribute("hidden")

        if(hidden != null){
            icone.innerText = "keyboard_arrow_down";
            form.removeAttribute("hidden");
            setCadIsVisible([...cadIsVisible, idForm])
        }else{
            icone.innerText = "keyboard_arrow_right";
            form.setAttribute("hidden","hidden");
            setCadIsVisible(cadIsVisible.filter(element=> {return element !== idForm}))
        }

    }

    function renderComponent(id, component){
        if(cadIsVisible.indexOf(id) >= 0){
            return component
        }else{
            return <></>
        }
    }

    return (
        <div className="container-fluid">

            <div className="container container-forms">
                <h2><a onClick={()=>{showFormCad("cad-local","icon-show-cad-local")}}><i id="icon-show-cad-local" className="material-icons" >keyboard_arrow_right</i>Cadastrar Local</a><hr/></h2>
                <div className="forms" id="cad-local" hidden>{renderComponent('cad-local',<RegLocal/>)}</div>
            </div>

            <div className="container container-forms">
                <h2><a onClick={()=>{showFormCad("cad-subnet","icon-show-cad-subnet")}}><i id="icon-show-cad-subnet" className="material-icons" >keyboard_arrow_right</i>Cadastrar Sub-rede</a><hr/></h2>
                <div className="forms" id="cad-subnet" hidden>{renderComponent('cad-subnet',<RegSubnet/>)}</div>
            </div>

            <div className="container container-forms">
                    <h2><a onClick={()=>{showFormCad("cad-dns","icon-show-cad-dns")}}><i id="icon-show-cad-dns" className="material-icons" >keyboard_arrow_right</i>Cadastrar DNS's</a><hr/></h2>
                    <div className="forms" id="cad-dns" hidden>{renderComponent('cad-dns',<RegDns/>)}</div>
            </div>

            <div className="container container-forms">
                    <h2><a onClick={()=>{showFormCad("cad-mikrotik","icon-show-cad-mikrotik")}}><i id="icon-show-cad-mikrotik" className="material-icons" >keyboard_arrow_right</i>Cadastrar Mikrotik</a><hr/></h2>
                    <div className="forms" id="cad-mikrotik" hidden>{renderComponent('cad-mikrotik',<RegMikrotik/>)}</div>
            </div>

            <div className="container container-forms">
                    <h2><a onClick={()=>{showFormCad("cad-host","icon-show-cad-host")}}><i id="icon-show-cad-host" className="material-icons" >keyboard_arrow_right</i>Cadastrar Host</a><hr/></h2>
                    <div className="forms" id="cad-host" hidden>{renderComponent('cad-host',<RegHost/>)}</div>
            </div>

            <div className="container container-forms">
                    <h2><a onClick={()=>{showFormCad("cad-type-host","icon-show-cad-type-host")}}><i id="icon-show-cad-type-host" className="material-icons" >keyboard_arrow_right</i>Cadastrar Tipo de Host</a><hr/></h2>
                    <div className="forms" id="cad-type-host" hidden>{renderComponent('cad-type-host',<RegTypeHost/>)}</div>
            </div>

            <div className="container container-forms mb-4">
                    <h2><a onClick={()=>{showFormCad("cad-domain","icon-show-cad-domain")}}><i id="icon-show-cad-domain" className="material-icons" >keyboard_arrow_right</i>Cadastrar Domínio</a><hr/></h2>
                    <div className="forms" id="cad-domain" hidden>{renderComponent('cad-domain',<RegDomain/>)}</div>
            </div>

        </div>
    );
}

export default Registrations;

if (document.getElementById('registrations')) {
    ReactDOM.render(<Registrations />, document.getElementById('registrations'));
}
