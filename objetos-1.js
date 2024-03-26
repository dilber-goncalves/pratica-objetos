const pessoa = {
    nome: "Jose",
    altura: 1.70,
    peso: 70,
};

pessoa.nome = "Pedro";
pessoa['altura'] = 1.80;
pessoa['peso'] = 78;


console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso} kg`);