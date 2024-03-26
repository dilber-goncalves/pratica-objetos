const pessoa = {
    nome: "Jose",
    idade: 30,
    altura: 1.73,
    temCnh: false,
    apelidos: [' Jr', ' Juninho '],
}

let cnh = (pessoa.temCnh ? "possui CNH" : "não possui CNH");//ternario para substituir o if

/*if(pessoa.temCnh) {
    cnh = "possui CNH";
}else{
    cnh = "não possui CNH";
}*/

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${cnh} e tem os seguintes apelidos: ${pessoa.apelidos}.`);