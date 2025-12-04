const numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function contar(arr) {
    const contagem = {};
  
    for (const item of arr) {
      if (contagem[item]) {
        contagem[item] += 1;
      } else {
        contagem[item] = 1;
      }
    }
  
    return contagem;
  }
  
  const resultado = contar(numeros);
  console.log(resultado);
  