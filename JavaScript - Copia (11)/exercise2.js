/*  Exercício 06

-> Armazene em valores em variáveis com cada um dos tipos de dados
vistos;

-> String, Number e Boolean;

*/


let letras = 'Lucas comeu pão com ovo!';

let numeros = 2+2;

let opcao = true;

console.log(typeof letras,typeof numeros,typeof opcao);

console.log('\n');

/* Exercício 07

-> Cria uma estrutura if que verifica a entrada na balada, se estiver mais
de 18 anos pode entrar;

-> Armazenar a idade em uma variável com let;
-> Insira uma instrução console.log('Pode entrar'), caso a pessoa tenha 
mais que 18 anos
*/


let idade = 17

if(idade >= 18) {
    console.log('Pode entrar!')

}else(
    console.log('Menor que a idade esperada! Entrada proibida!')
);

console.log('\n');

/* Exercício 08

-> Crie uma constante com o seu nome como valor;
-> Depois uma estrutura if que verifica o seu nome é o que está na constante;

-> Se estiver, emita uma mensagem de saudação com o console.log();

*/

const nome = 'Lucas';

if(nome == 'Lucas'){
    console.log('Bem - vindo Usuário ' + nome);
} else(
    console.log('Você não é o usuário desejável')
);

console.log('\n');

/* Exercício 09 

-> A função Math.pow() exibe a potência de um número;
-> Teste a função com console.log() e as seguintes bases: 2, 3, 18 e o
expoente deve ser 2;
-> Recebe 2 argumentos, base e expoente;

-> EXEMPLO: Math.pow(5,3);


*/


console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(18,2));

console.log('\n');


/* Exercício 10

-> Armazene a velocidade de um carro em uma variável, com o número
que desejar;
-> Faça uma estrutura com if/else que verifica ele está acima da velocidade;
-> 80 é a velocidade máxima permitida;
-> Se estiver acima ou a baixo exiba mensagens com console.log();


*/

const velocidade = 93;

if(velocidade <= 80){
    console.log('Velocidade abaixo da máxima permitida, NÃO recebe multa!');
}  else(
    console.log('Velocidade acima da máxima permitida, RECEBE multa!')
);

console.log('\n');

/* Exercício 11

-> Faça uma estrutura if/else para verificar se um usuário pode dirigir;
-> Armazene em variáveis algumas informações sobre usuário: idade, e se tem CNH
-> Se a idade for maior que 18 anos e não possuir CNH, exiba uma mensagem;
-> Se a idade for maior que 18 anos e tem CNH, exiba uma mensagem;
-> Se não tiver nem 18 anos e nem CNH, exiba outra mensagem;

*/

idade = 19;

const CNH = false;

if(idade >= 18 && CNH == false){
    console.log('Idade Confirmada e CNH Negada, Não pode dirigir!');

} else if (idade >= 18 && CNH == true)
    {console.log('Idade Confirmada e CNH confirmada, Pode dirigir!');
} else {
    console.log('Idade Negada e CNH negada, Não pode dirigir!');
}


console.log('\n');

/* Exercício 12

-> Escreva um loop while que exibe números de 0 a 10 no console.log();

*/

let numberLoop = 0;

while (numberLoop < 11){
    console.log(numberLoop);
    numberLoop = numberLoop + 1
}

console.log('\n');

/* Exercício 13

-> Escreva um loop for que exibe números de 100 a 50 no console.log();


*/

for(let i = 100; i >= 50; i--){
    console.log(i);
}

console.log('\n');

/* Exercício

-> Escreva um loop for ou while que exiba qual número é par e qual
número é ímpar,
-> o Contador em 0 e ir até 50;

*/

for(let t = 0; t <=50; t++){
    if(t % 2 == 0){
        console.log(`O número ${t} é par`);
    } else{
        console.log(`O número ${t} é ímpar`);
    }
} 

console.log('\n');

/* Exercício 15

-> Verifique se o número é primo!
-> Um número primo, é um número natural, maior que 1 apenas
divisível por si próprio e por 1;

*/

let num = 6;
let divisoes = 0;

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`O número ${num} é primo`);
} else {
    console.log(`O número ${num} não é primo`);
}

console.log('\n');



