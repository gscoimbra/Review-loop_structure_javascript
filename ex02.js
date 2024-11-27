const numero = 29

if (numero <= 1) {
    console.log("Não é primo")
}

let ehPrimo = true

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        ehPrimo = false
        break
    }
}

if (ehPrimo) {
    console.log("É primo")
} else {
    console.log("Não é primo");
}
