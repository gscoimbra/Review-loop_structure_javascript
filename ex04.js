const numero = 5 // coloque o número aqui

let fatorial = 1
let contador = numero

while (contador > 1) {
    fatorial *= contador
    contador--
}

console.log(`O fatorial de ${numero} é ${fatorial}`)