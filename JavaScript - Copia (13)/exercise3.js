/* Exercício 16

-> Imprima uma função que imprime 'Hello world' no console;


*/

function escrevendoNoConsole(){
    console.log('Hello World!');
}

escrevendoNoConsole();

console.log('\n');

/* Exercício 17

-> Escreva uma função que recebe um parâmetro de idade;
-> E imprima esta mensagem no console com template literals dizendo
"Você tem x anos";

*/

function idade(x){
    console.log(`Você tem ${x} anos`);
}

idade(19);

console.log('\n');

/* Exercício 18

-> Escreva uma função que some dois números e retorne eles;
-> Depois imprima este retorno


*/

function soma(x,y){
      return x + y
}

console.log(soma(2,2));

console.log('\n');

/* Exercício 19

-> Escreva uma função que retorne um número aleatório;
-> O número máximo retornado deve ser passado via parâmetro;
-> Utilizar Math.Random


*/

function numberRandom (num) {
    return Math.floor(Math.random() * num) + 1; // Math.random deixa o número quebrado, então use o Math.floor para arrendodar para baixo e utilize +1 
}

console.log(numberRandom(100));
console.log('\n');

/* Exercício 20

-> Escreva uma função que recebe a idade de uma pessoa;
-> Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima
uma mensagem
-> Se ela tem menos, ela não pode, imprima outra mensagem com este aviso
-> Execute a função nos dois casos;



*/

function autoescola (idade){
    if(idade>= 18){
        console.log('Idade suficiente para entrar na Auto ESCOLA');
    } else{
        console.log('Idade insuficiente para ingressa na Auto ESCOLA');
    }
}
autoescola(18);
autoescola(17);

console.log('\n');

/* Exercício 21

-> Escreva uma função que detecta o tipo de dado passado;
-> Verifique se é um; number, boolean ou string
-> retorne uma mensagem para cada tipo;
-> Execute uma função para cada caso;

*/

function verificandoDado (x){

    if(typeof x === 'string'){
        console.log('Dado verificado é um: STRING')
    } else if(typeof x === 'number') {
        console.log('Dado verificado é um: NUMBER');
    } else if(typeof x === 'boolean') {
        console.log('Dado verificiado é um: BOOLEAN');
    }

}

verificandoDado(1);
verificandoDado(true);
verificandoDado('Eu');
console.log('\n');

/* Exercício 22

-> Escreva uma função que receba número negativo e retorne um
número postivo;
-> Use math.abs





*/

function numberNegative (x) {
    return Math.abs(x)
}

console.log(numberNegative(-15));

console.log('\n');

/* Exercício 23

-> Escreva uma função que recebe uma string;
-> Se o texto conter mais de 10 caracteres imprima 'Texto muito longo';
-> Se conter menos, imprima 'Texto dentro do limite';


*/

function checarTexto(texto){
    if(texto.length > 10) {
        console.log('Texto muito longo!');
    } else {
        console.log('Texto dentro do limite permitido!');
    }
}

checarTexto('Eu sou lindo');
checarTexto('Test');

console.log('\n');


/* Exercício 24

-> Escreva uma função que receba dois números, o primeiro é a base
e segundo a potência;
-> Depois faça uma operação e retorne o resultado;
-> Exemplo: 3,2 = 9



*/

function potencia (a,b){
    return a ** b;
}

console.log(potencia(2,5));
console.log(potencia(2,3));

console.log('\n');


/* Exercício 25

-> Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
-> Além disso imprima somente os números pares no console;

*/

function imprimaPar(num) {
    for(let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

imprimaPar(10);
console.log('\n');


