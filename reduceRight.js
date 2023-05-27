
// UTILIZA UMA FUNÇÃO EM CADA UM DOS ELEMENTOS, REDUZINDO-OS EM UM ÚNICO ELEMENTO E GUARDANDO-OS EM UMA VARIÁVEL.

const funcionarios = [
    {nome: 'Douglas', vendas: 10},
    {nome: 'Deivisson', vendas: 6},
    {nome: 'Esther', vendas: 8},
    {nome: 'Maria', vendas: 9},
    {nome: 'Fernanda', vendas: 5},
    {nome: 'Jeovane', vendas: 5}
]

// pegando o valor total de vendas dos funcionários de forma inversa
const totalVendas = funcionarios.reduceRight(function (acumulador, vendas) {
    return acumulador + vendas.vendas;
}, 0);

console.log(totalVendas); // Saída: 43

