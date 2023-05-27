// É usado para modificar um array, removendo, substituindo ou adicionando elementos a ele.

const nomes = ['Douglas', 'Esther', 'Deivisson', 'Maria', 'Jeovane', 'Fernanda']

// Removendo elementos a partir do índice 0:
nomes.splice(0, 3);
console.log(`Removendo elementos: ${nomes}`); // Saída: [ 'Maria', 'Jeovane', 'Fernanda' ]

// Adicionando elementos a partir do índice 2:
nomes.splice(2, 0, 'João', 'José');
console.log(`Adicionando elementos: ${nomes}`); // Saída: [ 'Maria', 'Jeovane', 'João', 'José', 'Fernanda' ]

// Substituindo elemento do índice 1.
nomes.splice(1, 1, 'Lucas');
console.log(`Substituindo elementos: ${nomes}`);