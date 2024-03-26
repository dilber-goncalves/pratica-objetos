//não precisa declarar duas vzs a variável
const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
}

const pessoa = {
    nome: "Jose",
    idade: 30,
    altura: 1.73,
    temCnh: false,
    apelidos: [' Jr', ' Juninho '],
    carro /*{//objeto dentro do objeto
        marca: "Toyota",
        modelo: "Etios",
        ano: 2020,
        potencia: 80
    }*/
}


console.log(pessoa.carro);