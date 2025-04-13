const botao = document.querySelector("#botao");

const separarData = data => {
    return data.split("-");
}

const construirData = data => {
    return new Date(data[0], data[1] - 1, data[2]);
}

const diferencaSemanas = (data1, data2) => {
    let diferenca = 0;

    if(data1 > data2) diferenca = (data1 - data2) / (1000 * 60 * 60 * 24 * 7);
    else if(data1 < data2) diferenca = (data2 - data1) / (1000 * 60 * 60 * 24 * 7);

    return diferenca;
}

const resultado = () => {
    const data1 = construirData(separarData(document.querySelector("#data1").value));
    const data2 = construirData(separarData(document.querySelector("#data2").value));
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "Diferença de " + Math.floor(diferencaSemanas(data1, data2)) + " semana(s)";
}

botao.addEventListener("click", resultado);