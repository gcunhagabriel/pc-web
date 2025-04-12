const botao = document.querySelector("#botao");

const trocaVogais = (texto) => {
    let textoNovo = "";

    for(let i = 0; i < texto.length; ++i) {
        switch(texto[i].toLowerCase()) {
            case 'a' : textoNovo += '@';
                       break;
            case 'e' : textoNovo += '3';
                       break;
            case 'i' : textoNovo += '1';
                       break;
            case 'o' : textoNovo += '0';
                       break;
            case 'u' : textoNovo += '#';
                       break;
            default  : textoNovo += texto[i];
        }
    }

    return textoNovo;
}

const resultado2 = () => {
    const texto = document.querySelector("#texto").value;
    document.querySelector("#resultado").innerHTML = trocaVogais(texto);
}

botao.addEventListener("click", resultado2);