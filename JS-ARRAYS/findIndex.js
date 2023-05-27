// PROCURAR ÍNDICE DO ELEMENTO

const numeros = [5, 10, 15, 20, 25, 30, 35];

const encontrarÍndice = numeros.findIndex(function (numeros) {
    return numeros === 20;
})

console.log(encontrarÍndice); // Saída: 3