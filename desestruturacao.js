//desestruturação de objetos - Destructuring

const pessoa = {
    nome: "Dilber",
    idade: 28,
    cidade: "Maringá",
    profissão: "Músico"
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const {nome, idade, ...outros} = pessoa; // faz o mesmo que o código acima, pega os itens do objeto e transforma em variáveis -- as chaves mudam para antes do sinal de atribuição =

console.log(nome, idade);
console.log(outros);