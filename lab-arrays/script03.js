const decimalParaRomano = numeroDecimal => {
    const numerosDecimais = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let numeroRomano = "";
    for(let i = 0; i < numerosRomanos.length; ++i) {
        while(numeroDecimal >= numerosDecimais[i]) {
            numeroRomano += numerosRomanos[i];
            numeroDecimal -= numerosDecimais[i];
        }
    }
    return numeroRomano;
}

console.log(decimalParaRomano(3));
console.log(decimalParaRomano(6));
console.log(decimalParaRomano(9));
console.log(decimalParaRomano(27));
console.log(decimalParaRomano(48));
console.log(decimalParaRomano(59));
console.log(decimalParaRomano(93));
console.log(decimalParaRomano(575));