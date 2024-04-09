const usuarios = [
    {
        nome: 'Joao',
        idade: 25,
    },
    {
        nome: 'Ana',
        idade: 25,
    },
    {
        nome: 'Beatriz',
        idade: 15,
    },
    {
        nome: 'Carlos',
        idade: 16,
    },
    {
        nome: 'Antonio',
        idade: 32,
    }
];

const jovens = [];
const adultos = [];
let indiceJovens = 0;
let indiceAdultos = 0;

for (const usuario of usuarios){
    if (usuario.idade < 18){
        jovens[indiceJovens] = usuario;
        indiceJovens++;
    }else{
        adultos[indiceAdultos] = usuario;
        indiceAdultos++;
    }
}

console.log(jovens);
console.log(adultos);