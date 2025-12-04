let jogadores = [
    {nome: "Hilbert", pontos: 150},
    {nome: "Kaio", pontos: 300},
    {nome: "Luca", pontos: 250}
];

function classificar(jogadores) {
    return jogadores.sort((a, b) => b.pontos - a.pontos);
}

console.log(classificar(jogadores));