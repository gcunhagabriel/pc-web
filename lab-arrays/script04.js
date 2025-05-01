const valoresCedulas = [100, 50, 20, 10, 5, 2];

const saqueMinimo = valor => {
    const quantidadeCedulas = [0, 0, 0, 0, 0, 0];
    for(let i = 0; i < quantidadeCedulas.length; ++i) {
        while(valor >= valoresCedulas[i]) {
            ++quantidadeCedulas[i];
            valor -= valoresCedulas[i];
        }
    }
    return quantidadeCedulas;
}

const tabelaDeCedulas = quantidadeCedulas => {
    console.log("Cédula\tQuantidade");
    for(let i = 0; i < quantidadeCedulas.length; ++i) {
        if(quantidadeCedulas[i] > 0) {
            console.log(valoresCedulas[i] + "\t\t" + quantidadeCedulas[i]);
        }
    }
    console.log("\n");
}

tabelaDeCedulas(saqueMinimo(1280));
tabelaDeCedulas(saqueMinimo(5705));
tabelaDeCedulas(saqueMinimo(892));