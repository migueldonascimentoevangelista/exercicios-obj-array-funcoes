const notas = [8, 7.5, 9, 6];

function media(notas) {
  return notas.reduce((soma, n) => soma + n) / notas.length;
}

console.log(media(notas));