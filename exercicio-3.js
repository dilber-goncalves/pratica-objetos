const produtosConsumidos = [
    {
        nome: "drink",
        preco: 21.9,
        quantidade: 2
    },
    {
        nome: "porcao",
        preco: 25.0,
        quantidade: 1
    },
    {
        nome: "espetinho",
        preco: 10,
        quantidade: 2
    }
];

let cartaoDeConsumo = {
    nome: "Karla",
    idade: 22,
    produtosConsumidos
}

console.log(cartaoDeConsumo.nome);
console.log(cartaoDeConsumo.idade);
cartaoDeConsumo.idade = 28;
console.log(cartaoDeConsumo.idade);
console.log(cartaoDeConsumo.produtosConsumidos[0].nome);
console.log(cartaoDeConsumo.produtosConsumidos[produtosConsumidos.length -1].preco);
