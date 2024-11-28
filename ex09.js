// 9 - Imprima um padrão de estrela decrescente
// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

const linhas = 5
let i = linhas

do {
    console.log("*".repeat(i))
    i--
} while (i > 0)

// *****
// ****
// ***
// **
// *