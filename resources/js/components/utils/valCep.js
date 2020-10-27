function Trim(strTexto)
{
    // Substitúi os espaços vazios no inicio e no fim da string por vazio.
    return strTexto.replace(/^\s+|\s+$/g, '');
}

// Função para validação de CEP.
function IsCEP(strCEP)
{
    // Caso o CEP não esteja nesse formato ele é inválido!
    var objER1 = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/;
    var objER2 = /^[0-9]{5}-[0-9]{3}$/;
    var objER3 = /^[0-9]{8}$/;

    strCEP = Trim(strCEP)
    if(strCEP.length > 0)
        {
            if(objER1.test(strCEP)){
                let cepArrayOne = strCEP.split(".")
                let cepArrayTwo = [cepArrayOne[0], cepArrayOne[1].split("-")];
                let cep = `${cepArrayTwo[0]}`+`${cepArrayTwo[1][0]}`+`${cepArrayTwo[1][1]}`
                return {valid: true, cep};
            }else if(objER2.test(strCEP)){
                let cepArray = strCEP.split("-")
                let cep = `${cepArray[0]}`+`${cepArray[1]}`
                return {valid: true, cep};
            }else if(objER3.test(strCEP)){
                return {valid:true, cep:strCEP};
            }else{
                return false;
            }
        }
    else
        return false;
}

export default IsCEP;
