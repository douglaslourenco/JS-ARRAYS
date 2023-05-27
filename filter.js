// FILTRAR ELEMENTOS DO ARRAY

const alunos = [
    {nome: 'aluno1', nota: 10},
    {nome: 'aluno2', nota: 7},
    {nome: 'aluno3', nota: 3},
    {nome: 'aluno4', nota: 5},
    {nome: 'aluno5', nota: 2}
]

const alunosAprovados = alunos.filter(function (alunos) {
    return alunos.nota >= 5;
})

console.log(alunosAprovados);
/*
SAÍDA:
[
  { nome: 'aluno1', nota: 10 },
  { nome: 'aluno2', nota: 7 },
  { nome: 'aluno4', nota: 5 }
]
*/
