const nomes = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];

function nomeExiste(nome) {
    return nomes.includes(nome);
}


console.log(nomeExiste("Carla"));
console.log(nomeExiste("Marcos"));