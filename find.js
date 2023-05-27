// PROCURAR ELEMENTO

const numeros = [5, 10, 15, 20, 25];

const encontrarElemento = numeros.find( function (numeros) {
    return numeros > 16;
})

console.log(encontrarElemento); // Saída: 20