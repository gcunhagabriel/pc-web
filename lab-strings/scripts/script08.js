const botao = document.querySelector("#botao");

const intercambiarLetras = texto => {
    let textoAlterado = "";

    for(let i = 0; i < texto.length; ++i) {
        switch(texto[i]) {
            case 'T' : textoAlterado += 'P'; break;
            case 'E' : textoAlterado += 'O'; break;
            case 'N' : textoAlterado += 'L'; break;
            case 'I' : textoAlterado += 'A'; break;
            case 'S' : textoAlterado += 'R'; break;
            case 'P' : textoAlterado += 'T'; break;
            case 'O' : textoAlterado += 'E'; break;
            case 'L' : textoAlterado += 'N'; break;
            case 'A' : textoAlterado += 'I'; break;
            case 'R' : textoAlterado += 'S'; break;
            default  : textoAlterado += texto[i];
        }
    }

    return textoAlterado;
}

const resultado = () => {
    const texto = document.querySelector("#texto").value.toUpperCase();
    const textoAlterado = intercambiarLetras(texto);
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = textoAlterado;
}

botao.addEventListener("click", resultado);