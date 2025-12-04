const livros = [
    {Título: "O Pequeno Principe", Autor: "Antoine de Saint-Exupéry", Ano: 1943},
    {Título: "Os Sete Maridos de Evelyn Hugo", Autor: "Taylor Jenkins Reid", Ano: 2017},
    {Título: "O Leão, a Feiticeira e o Guarda-Roupa", Autor: "C. S. Lewis", Ano: 1950}
];

function livrosRecentes (biblioteca){
    return biblioteca.filter(livro => livro.Ano > 2010);
};

console.log(livrosRecentes(biblioteca))