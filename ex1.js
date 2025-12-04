const aluno = {
    Nome: 'Miguel',
    Idade: "18 anos",
    Curso: 'ADS'
}

function apresentar (aluno){
    return `${aluno.Nome} tem ${aluno.Idade} e cursa ${aluno.Curso}`
}

console.log(aluno)