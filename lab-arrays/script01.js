const sum = numeros => {
    let soma = 0;
    soma = numeros.reduce(function(soma, numero) {
        return soma + numero;
    }, 0);
    return soma;
}

const sumOdds = numeros => {
    let soma = 0;
    soma = numeros.reduce(function(soma, numero) {
        if(numero % 2 !== 0) {
            return soma + numero;
        }
        else {
            return soma;
        }
    }, 0);
    return soma;
}

const product = numeros => {
    let produto = 0;
    produto = numeros.reduce(function(produto, numero) {
        return produto * numero;
    }, 1);
    return produto;
}

const array1 = [1, 2, 3];
const array2 = [2, 2, 2];
const array3 = [1, 2, 3, 4, 5, 6];

console.log(sum(array1));
console.log(sum(array2));
console.log(sum(array3));

console.log(sumOdds(array1));
console.log(sumOdds(array2));
console.log(sumOdds(array3));

console.log(product(array1));
console.log(product(array2));
console.log(product(array3));