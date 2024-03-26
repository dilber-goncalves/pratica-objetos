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

let total = 0;
for (let produto of produtosConsumidos){
    total += produto.preco * produto.quantidade;
}

console.log(`A cliente ${cartaoDeConsumo.nome}, tem um total de R$ ${total}.`);
