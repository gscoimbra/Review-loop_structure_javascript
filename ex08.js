// 8 - Calcule a soma dos dígitos de um número
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

const numeroInicial = 1234 // Coloque o número aqui
let numero = numeroInicial
let soma = 0

do {
    soma += numero % 10 // pego o último dígito
    numero = Math.floor(numero / 10) // remove o último dígito
} while (numero > 0)

console.log("A soma dos dígitos é: " + soma)