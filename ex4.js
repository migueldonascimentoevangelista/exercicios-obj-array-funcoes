const listaDeNomes = ["Miguel", "Maria", "Matheus"]

function pushArray(valor, array=[]){
    array[array.length]=valor
}

pushArray("Manuella", listaDeNomes)
console.log(listaDeNomes)