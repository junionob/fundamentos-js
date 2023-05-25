/*
//var - pode ser utilizado em qualquer lugar do código

var altura = 5;
var comprimento = 7;


//o js entende que area é uma variavel 

area = altura * comprimento;
console.log(area);
var area;
*/

/*
let forma = "retângulo"
let altura = 5; 
let comprimento = 7;
let area;


//bloco é o que está dentro das chaves { };
if(forma === 'retângulo'){
    area = (altura * comprimento);
} else {
    area = (altura * comprimento) / 2;
}


console.log(area);
*/


//const o valor precisa ser inicializado e não pode ser alterado
const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area; 


if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}




console.log(area);
