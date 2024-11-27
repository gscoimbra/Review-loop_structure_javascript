let numero = 1234; // colocar o número aqui
const numero_inicial = numero;

let invertido = 0;

while (numero > 0) {
    let digito = numero % 10 // pego o último dígito, 1234 -> 4
    invertido = invertido * 10 + digito // adiciono o dígito ao número invertido, 40 + 3 -> 43(segunda interação)
    numero = Math.floor(numero / 10) // removo o último dígito do número, 1234 -> 123
}

console.log(`O número invertido de ${numero_inicial} é ${invertido}`)