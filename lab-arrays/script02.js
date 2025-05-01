const ehPrimo = numero => {
    let primo = true;
    for(let i = 2; i < numero; ++i) {
        if(numero % i === 0) {
            primo = false;
        }
    }
    return primo;
}

const nNumerosPrimos = quantidade => {
    let i = 0;
    let numero = 2;
    const numerosPrimos = [];
    while(i < quantidade) {
        if(ehPrimo(numero)) {
            numerosPrimos.push(numero);
            ++i;
        }
        ++numero;
    }
    return numerosPrimos;
}

const primosNoIntervalo = (inicio, fim) => {
    const numerosPrimos = [];
    for(let i = inicio; i <= fim; ++i) {
        if(ehPrimo(i)) {
            numerosPrimos.push(i);
        }
    }
    return numerosPrimos;
}

const serieDePrimos = (numero1, numero2) => {
    let serie = "";
    if(numero2 === undefined) {
        serie = nNumerosPrimos(numero1).join(", ");
    }
    else {
        serie = primosNoIntervalo(numero1, numero2).join(", ");
    }
    return serie;
}

console.log(serieDePrimos(4));
console.log(serieDePrimos(6));
console.log(serieDePrimos(2, 10));
console.log(serieDePrimos(2, 20));
console.log(serieDePrimos(10, 2));