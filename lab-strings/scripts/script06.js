const botao = document.querySelector("#botao");

const nomeDoMes = numero => {
    let mes = "";
    switch(numero) {
        case "01" : mes = "janeiro";
                    break;
        case "02" : mes = "fevereiro";
                    break;
        case "03" : mes = "março";
                    break;
        case "04" : mes = "abril";
                    break;
        case "05" : mes = "maio";
                    break;
        case "06" : mes = "junho";
                    break;
        case "07" : mes = "julho";
                    break;
        case "08" : mes = "agosto";
                    break;
        case "09" : mes = "setembro";
                    break;
        case "10" : mes = "outubro";
                    break;
        case "11" : mes = "novembro";
                    break;
        case "12" : mes = "dezembro";
                    break;
    }
    return mes;
}

const resultado = () => {
    const data = document.querySelector("#data").value;
    const dataSeparada = data.split("-");
    const dataNascimento = dataSeparada[2] + " de " + nomeDoMes(dataSeparada[1]) + " de " + dataSeparada[0];
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = dataNascimento;
}

botao.addEventListener("click", resultado);