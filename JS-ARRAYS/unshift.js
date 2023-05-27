
// Adiciona um ou mais elementos no inicio do array, consequentemente trocando os índices dos elementos posteriores.

const nomes = ['Douglas', 'Deivisson', 'Esther', 'Maria'];

const adicionarNomes = nomes.unshift('Fernanda', 'Jeovane');

console.log(adicionarNomes); // retorno do novo comprimento do array: 6;
console.log(nomes); // array com os novos nomes adicionados: [ 'Fernanda', 'Jeovane', 'Douglas', 'Deivisson', 'Esther', 'Maria' ];



