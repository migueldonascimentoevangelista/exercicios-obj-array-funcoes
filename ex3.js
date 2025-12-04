const aluno = {
    notas: [10,5,0]
}

function media(aluno){
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0); 

    return soma / this.notas.length;
}

console.log(aluno.media());