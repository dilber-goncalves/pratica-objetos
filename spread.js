// juntar coisas

const pessoa = {
    nome: "Dilber",
    idade: 28,
    cidade: "Maringá",
    profissao: "Músico"
};

const endereco = {
    rua: "Dos bobos",
    numero: "0",
    bairro: "Dos Loucos"
};

const objetoMix = {
    ...pessoa,
    ...endereco
};

console.log(objetoMix);