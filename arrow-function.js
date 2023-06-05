//arrow-function

//nome da função - parame - bloco da função
// const apresentar = nome => `Meu nome é ${nome}`;

// const nome = "Junio";
// console.log(apresentar(nome));

//arrow com dois parametros 

// const soma = (num1, num2) => num1 + num2;
// console.log(soma(7, 3))

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 && num2 > 10 ){
        return "Só pode números de 1 a 10"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(2, 4))