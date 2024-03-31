/*let  array = [1, 2, 3, 4, 5];
const tamanho = array.length;

console.log(tamanho);

let indice = 0;
let soma = 0;
        while (indice < tamanho){
            soma = soma + array[indice]
            indice++;
        }
        console.log(soma);*/

/*const produtividadeDosFuncionarios = [90, 125, 50, 5, 45.5, 29];
const maiorValor = Math.max(...produtividadeDosFuncionarios);
const porcentagem = maiorValor * 0.3;

console.log("Porcentagem do maior valor:", porcentagem);

let demissoes = 0;
for (let indice = 0; indice < produtividadeDosFuncionarios.length; indice++) {
    if (produtividadeDosFuncionarios[indice] < porcentagem) {
        demissoes++;
    }
}
console.log("Número de demissões:", demissoes);*/

/*let dinheiro = 5;
let casaAtual = 5;
let numeroDoDado = 2;
const lucroPrejuizoCasas = [3, -1, -4, 20, 6, 2, -7, 9, -8, 9, 5, 8, 3, 2, -1, -1, -3, 4, 8, 10];

let numCasa = numeroDoDado + casaAtual;
let dinheiroAtual = dinheiro + lucroPrejuizoCasas[numCasa];
if(dinheiroAtual <= 0){
    console.log("PERDEU");
}else if(numCasa > 20){
    console.log("GANHOU");
}*/

/*let dinheiro = 5;
let casaAtual = 5;
let numeroDoDado = 2;
const lucroPrejuizoCasas = [3, -1, -4, 20, 6, 2, -7, 9, -8, 9, 5, 8, 3, 2, -1, -1, -3, 4, 8, 10];

let numCasa = numeroDoDado + casaAtual -1;
dinheiro = lucroPrejuizoCasas[numCasa] + dinheiro;

if (dinheiro <= 0) {
    console.log("PERDEU");
}else if (numCasa >= lucroPrejuizoCasas.length -1){
    console.log("GANHOU");
    }*/

    let senhaDigitada = [ 8, 5, 5, 3, 3, 2, 9];

    // Verificando se a senha tem exatamente 8 caracteres e nenhum deles é uma string
    if(senhaDigitada.length < 8 || senhaDigitada.some(elem => typeof elem === "string")){
        console.log("INVALIDA");
    } else {
        let repeticoes = 1;
    
        // Iterando pela senha para contar repetições consecutivas
        for(let i = 0; i < senhaDigitada.length - 1; i++){
            if (senhaDigitada[i] === senhaDigitada[i+1]){
                repeticoes++;
            } else {
                // Reiniciando contagem se o caractere não for repetido
                repeticoes = 1;
            }
            
            // Se houver mais de 3 repetições consecutivas, a senha é inválida
            if (repeticoes >= 3) {
                console.log("INVALIDA");
                return; // Se inválida, não precisa continuar verificando
            }
        }    
    
        // Se a senha não for inválida até agora, é válida
        console.log("VALIDA");
    }
    