// 10 - Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

function calcularMDC(a, b) {
    let maior = a
    let menor = b

// Algoritmo de Euclides
    // Para dois números a e b, calcula o resto da divisão de a por b (a % b).
    // Substitui a pelo valor de b e b pelo valor do resto.
    // Repete o processo até que o resto seja zero.
    // Quando o resto é zero, o último valor de b é o MDC.
    do {
        let resto = maior % menor
        maior = menor
        menor = resto
    } while (menor !== 0)

    return maior
}

console.log("O MDC de 56 e 98 é: " + calcularMDC(56, 98))