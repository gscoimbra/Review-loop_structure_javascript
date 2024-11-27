const linhas = 5 // coloque a quantidade aqui

for (let i = 1; i <= linhas; i++) {
    let linha = ''
    for (let j = 1; j <= i; j++) {
        linha += j + ' '
    }
    console.log(linha)
}
// linhas = 5
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 