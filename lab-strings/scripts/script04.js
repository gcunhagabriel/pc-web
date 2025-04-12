const botao = document.querySelector("#botao");

const palavraFoiContada = (palavra, lista) => {
    let foiContada = false;
    for(let i = 0; i < lista.length; ++i) {
        if(palavra === lista[i].palavra) {
            foiContada = true;
        }
    }
    return foiContada;
}

const contarOcorrencias = lista => {
    let palavrasContadas = [];
    let ocorrencias = 0;

    for(let i = 0; i < lista.length; ++i) {
        if(!palavraFoiContada(lista[i], palavrasContadas)) {
            ++ocorrencias;
            for(let j = 0; j < lista.length; ++j) {
                if(lista[i] === lista[j] && i !== j) {
                    ++ocorrencias;
                }
            }
            palavrasContadas.push({
                palavra: lista[i],
                ocorrencias: ocorrencias
            })
            ocorrencias = 0;
        }
    }
    
    return palavrasContadas;
}

const maiorOcorrencia = lista => {
    let maior = lista[0];

    for(let i = 0; i < lista.length; ++i) {
        if(lista[i].ocorrencias > maior.ocorrencias) {
            maior = lista[i];
        }
    }

    return maior;
}

const totalDeLetras = lista => {
    let numeroDeLetras = 0;
    let palavra = "";

    for(let i = 0; i < lista.length; ++i) {
        for(j = 0; j < lista[i].length; ++j) {
            palavra = lista[i];
            if(palavra[j] >= 'a' && palavra[j] <= 'z' || palavra[j] >= 'A' && palavra[j] <= 'Z') {
                ++numeroDeLetras;
            }
        }
    }

    return numeroDeLetras;
}

const resultado = () => {
    const resultado = document.querySelector("#resultado");
    const texto = document.querySelector("#texto").value.toLowerCase();
    const palavras = texto.split(" ");
    const palavrasContadas = contarOcorrencias(palavras);
    
    const palavraCorrente = maiorOcorrencia(palavrasContadas);
    const numeroDePalavras = palavras.length;
    const numeroDeLetras = totalDeLetras(palavras);

    if(palavraCorrente.ocorrencias <= 1) resultado.innerHTML = "Palavra de maior ocorrência: " + palavraCorrente.palavra + ", com " + palavraCorrente.ocorrencias + " aparição<br>";
    else resultado.innerHTML = "Palavra de maior ocorrência: " + palavraCorrente.palavra + ", com " + palavraCorrente.ocorrencias + " aparições<br>";
    resultado.innerHTML += "Número de palavras: " + numeroDePalavras + "<br>";
    resultado.innerHTML += "Total de letras: " + numeroDeLetras; 
}

botao.addEventListener("click", resultado);