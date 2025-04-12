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

const criarTabela = lista => {
    let tabela = "<table><tr><th>Palavra</th><th>Ocorrências</th></tr>";

    for(let i = 0; i < lista.length; ++i) {
        tabela += "<tr><td>" + lista[i].palavra + "</td><td>" + lista[i].ocorrencias + "</td></tr>";
    }

    tabela += "</table>";
    return tabela;
}

const resultado = function() {
    const texto = document.querySelector("#texto").value.toLowerCase();
    const tabela = document.querySelector("#tabela");
    const palavras = texto.split(" ");
    const palavrasContadas = contarOcorrencias(palavras);
    tabela.innerHTML = criarTabela(palavrasContadas);
}

botao.addEventListener("click", resultado);