let  array = [1, 2, 3, 4, 5];
const tamanho = array.length;

console.log(tamanho);

let indice = 0;
let soma = 0;
        while (indice < tamanho){
            soma = soma + array[indice]
            indice++;
        }
        console.log(soma);