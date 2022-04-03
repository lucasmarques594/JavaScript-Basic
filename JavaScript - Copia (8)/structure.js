/*  O que são estruturas de controle?

-> Um programa é executado de cima para baixo;
-> Com as estruturas podemos modelar o fluxo do programa;
-> Ou seja, dependendo dos valores de statements e expressions, ele
tomará um caminho diferente;

*/

/*  Estrutura condicional: if

-> O programa vai executar um bloco de código, SE algo acontecer;
-> Onde algo é a condição imposta por um statement;
-> Que resulta em um boolean (true or false);

*/

let idade = 19;

if(idade > 18) {
    console.log('Pode Entrar');
}

let nome ="Lucas";

let passaporte = true;
if((nome == "Lucas" && idade > 30) || passaporte == true ){
    console.log('Liberado!');
}

console.log('\n');

/* Estrutura condicional: else

-> Podemos executar um bloco de código, caso a instrução do if
não seja atendida;
-> Ou seja, SE NÃO EXECUTAR o bloco if, EXECUTE o bloco else;

*/

if (idade >= 20) {
    console.log(`Você tem mais de 20 anos de idade`);
} else {
    console.log('Certamente sua idade é abaixo de 20 anos');
}

console.log('\n');

/*  Estrutura condicional: else if

-> Ainda podemos encadear mais condições com o else if;
-> Ou seja, aintes de executar um else, ou até mesmo sem ele
podemos verificar mais uma condição;

*/

let a = 5;
let b = 3;

if(a + b == 3){
    console.log('O resultado é 3');
} else if(a == 4){
    console.log('O valor de a é 4');
} else if (b == 3){
    console.log('O valor de b é 3');
} else {
    console.log('Nenhuma das condições acima!');
}