const botao = document.querySelector("#botao");

const pegaTexto = seletor => document.querySelector(seletor).value;

const inverteTexto = lista => {
    let palavra = "";
    let textoInvertido = "";

    for(let i = lista.length - 1; i >= 0; --i) {
        palavra = lista[i];
        for(let j = palavra.length - 1; j >= 0; --j) {
            textoInvertido += palavra[j];
        }
        textoInvertido += " ";
    }
    
    return textoInvertido;
}

const escrever = (texto, seletor) => {
    document.querySelector(seletor).innerHTML = texto;
}

const resultado1 = () => {
    const texto = pegaTexto("#texto");
    const palavras = texto.split(" ");
    const textoInvertido = inverteTexto(palavras);
    escrever(textoInvertido, "#resultado");
}

botao.addEventListener("click", resultado1);