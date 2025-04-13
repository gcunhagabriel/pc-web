const botao = document.querySelector("#botao");

const diferencaDias = (data1, data2) => {
    return (data1 - data2) / (1000 * 60 * 60 * 24);
}

const resultado = () => {
    const aniversario = document.querySelector("#data").value;
    const aniversarioSeparado = aniversario.split("-");

    const dataAniversario = new Date(aniversarioSeparado[0], aniversarioSeparado[1] - 1, aniversarioSeparado[2]);
    const dataAtual = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = Math.round(diferencaDias(dataAtual, dataAniversario)) + " dias vividos";
}

botao.addEventListener("click", resultado);