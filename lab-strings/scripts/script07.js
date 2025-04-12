const botao = document.querySelector("#botao");

const classificarSenha = senha => {
    let temMinuscula = false;
    let temMaiuscula = false;
    let temNumero = false;
    let temEspecial = false;
    let classificacao = "";

    for(i = 0; i < senha.length; ++i) {
        if(senha[i] >= 'a' && senha[i] <= 'z') {
            temMinuscula = true;
        }
        else if(senha[i] >= 'A' && senha[i] <= 'Z') {
            temMaiuscula = true;
        }
        else if(senha[i] >= '0' && senha[i] <= '9') {
            temNumero = true;
        }
        else temEspecial = true;
    }

    if(temMinuscula && temMaiuscula && temNumero && temEspecial) classificacao = "Senha Forte";
    else if(temMaiuscula && temMinuscula && temNumero) classificacao = "Senha Moderada";
    else classificacao = "Senha Fraca";
    
    return classificacao;
}

const corDaClassificacao = classificacao => {
    let cor = "";
    switch(classificacao) {
        case "Senha Forte" : cor = "green";
                             break;
        case "Senha Moderada" : cor = "orange";
                             break;
        case "Senha Fraca" : cor = "red";
                             break;
    }
    return cor;
}

const resultado = () => {
    const senha = document.querySelector("#senha").value;
    const classificacao = classificarSenha(senha);
    const cor = corDaClassificacao(classificacao);
    const resultado = document.querySelector("#resultado");
    resultado.style.color = cor;
    resultado.innerHTML = classificacao;
}

botao.addEventListener("click", resultado);