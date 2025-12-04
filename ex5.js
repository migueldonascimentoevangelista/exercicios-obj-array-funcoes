const elementos = ["a", "b", "a", "c", "b", "a"];


function contar(arr) {
    const contagem = {};

    arr.forEach(item => {
        if (contagem[item]) {
            contagem[item]++;      
        } else {
            contagem[item] = 1;  
        }
    });

    return contagem;
}

console.log(contar(elementos));
  