const carrinho = [
  { nome: "Camisa", quantidade: 3, preco: 48 },
  { nome: "Casaco", quantidade: 1, preco: 68 },
  { nome: "Blusa", quantidade: 1, preco: 58 },
  { nome: "Regata", quantidade: 2, preco: 30 },
];

function totalCarrinho(lista) {
  return lista.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

console.log(totalCarrinho(carrinho));