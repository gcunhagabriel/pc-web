const botao = document.querySelector("#botao");

const resultado = () => {
    const texto = document.querySelector("#texto").value;
    const procurar = document.querySelector("#procurar").value;
    const substituir = document.querySelector("#substituir").value;
    const resultado = document.querySelector("#resultado");
    const textoTrocado = texto.replaceAll(procurar, substituir);
    resultado.innerHTML = textoTrocado;
}

botao.addEventListener("click", resultado);