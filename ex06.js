const numeroInicial = 121
let numero = numeroInicial
let numeroInvertido = 0

while (numero !== 0) {
    let digito = numero % 10
    numeroInvertido = numeroInvertido * 10 + digito
    numero = Math.floor(numero / 10)
}

if (numeroInicial == numeroInvertido) {
    console.log(numeroInicial + " é um número palíndromo")
} else {
    console.log(numeroInicial + " não é um palíndromo")
}