// 7 - Conte o número de dígitos de um número
// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

const numeroInicial = 12345
let numero = numeroInicial
let contador = 0

do {
    contador++
    numero = Math.floor(numero / 10)
} while (numero > 0)

console.log("O número tem " + contador + " dígitos.")