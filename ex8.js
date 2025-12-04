const pessoas = [
  { nome: "João", idade: 16 },
  { nome: "Alan", idade: 38 },
  { nome: "Maria", idade: 19 },
];

function maioresDe18(lista) {
  return lista.filter(p => p.idade > 18);
}

console.log(maioresDeIdade(pessoas));