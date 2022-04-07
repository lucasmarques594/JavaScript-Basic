/*  O que são funções?

-> Funções são estruturas de códigos menores que são
reaproveitadas durante a execução/construção
de um programa;
-> Principal objetivo: poupar repetição de código;
-> Podem ser consideradas 'SUBPROGRAMAS';
 

    Definindo uma função

-> Uma função tem uma estrutura um pouco mais complexa;
-> Devemos declarar a função sempre com a palavra function;
-> Uma função deve ter um nome;
-> Pode conter argumentos/parâmetros, definidos entre();
-> O corpo da função é definido entr {};
-> Geralmente uma função retorna um valor;
-> É possível declarar funções em variáveis;

*/

function escrevendoNoConsole(){
    console.log('Escrevendo no console!');
}

escrevendoNoConsole();

const textoNoConsole = function () {
    console.log('Texto no console!');
}

console.log('\n');

textoNoConsole();

const textoPorParametro = function(texto) {
    console.log(texto);
}

console.log('\n');

textoPorParametro('Testando por parâmetro!');


console.log('\n');


const soma = function(a, b){
    return a + b;
}

console.log(soma(5,5));

console.log('\n');

const saudacao = function(nome) {
    if(nome == 'Lucas'){
        return 'Olá Lucas';
    }
}

console.log(saudacao('Lucas'));

console.log('\n');


function multiplicaTresNumeros (x,y,z) {
    return x * y * z;
}

console.log(multiplicaTresNumeros(2,2,2));

console.log('\n');

const mult = multiplicaTresNumeros (5,5,5);

console.log('O valor de mult é ' + mult);

console.log('\n');

function podeDirigir (idade, cnh) {
    if (idade>= 18 && cnh == true) {
        console.log('Pode dirigir!');
    } else {
        console.log('Não pode dirigir!');
    }
}

console.log('\n');

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17,false));

console.log('\n');

/* Escopo de uma função

-> O que acontece dentro de uma função fica separado do escopo
global;

-> O escopo global sera todo o arquivo de JavaScript;

*/

let n = 10;

const numero = function () {
    let n = 25;
    console.log(n);
}

console.log('\n');

console.log(n)

console.log('\n');

/* Mais sobre escopo

-> Atualmente com LET e CONST, qualquer bloco de código pode separar
seu escopo (um if por exemplo);

-> Isso é muito bom pois separa os contextos, com VAR isso não 
acontecia

-> Ou seja, poodemos ter escopos diferentes não só com funções;

*/

let x = 10;

if(true) {
    let x = 20;
    console.log(x); // escopo if
 } 

 console.log('\n');


console.log(x) // escopo global

console.log('\n');

/* Escopo aninhado (Nested scopes)

-> Por causa de possibilidade de cria ume escopo, podemos ter mais
níveis de escopo;

*/

let y = 5;

const multiplicar = function(n) {

    let y = n * 2;

    console.log(y) // escopo função

    if( y == 10) {

        console.log('\n');

        let y = 55;

        console.log(y) // escopo if dentro da função
    }
}

multiplicar(y);

console.log('\n');


/* Arrow Functions

-> Um outra forma de escrever funções;
-> Bem utilizada nos frameworks modernos;
-> Porém não deve substituir as functions por completo 


*/

const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(3));

console.log('\n');


let consoleTeste = () => {
    console.log('Olá mundo!');
};

consoleTeste();

let sume = (a,b) => {
    return a+b;
};

console.log('\n');

console.log(sume(10,20));

console.log('\n');


/* Mais sobre Arrow Functions

-> Se só tem um parâmetro podemos remover os parêntese do argumento
e o return;
-> Se a expressão for pequena, pode até ser feita em uma linha sem
prejudicar a leitura do código;

*/

const raizQuadrada = (x) => {
    return x * x;
}

const raizQuadrada2 = n => n * n;

console.log(raizQuadrada(2));
console.log('\n');
console.log(raizQuadrada2(4));
console.log('\n');

const muitiplicarPorDois = (x) => {
    return x * 2;
}

console.log(muitiplicarPorDois(2));

console.log('\n');

const muitiplicarPorDois2 = x => x * 2;

console.log(muitiplicarPorDois2(2));

console.log('\n');

/* Argumentos Opcionais

-> Podemos chamar uma função em JS sem o número igual
de parâmetros determinados;

*/

function nomeComIdade(nome, idade) {
    if (idade === undefined) {
        console.log('Seu nome é ' + nome);
    } else {
        console.log('Seu nome é ' + nome + ' e você tem ' + idade + ' anos');
    }
}

nomeComIdade('Lucas');

console.log('\n');

nomeComIdade('Bequinha', 12);

console.log('\n');


/* Argumentos com valor default

-> Podemos pre-determinar um valor para um argumento;

*/

function repetirFrase (frase, n=2) {
    for(let x = 1; x <= n; x++){
        console.log(frase + ' ' + x );
    }
}

repetirFrase('Testando', 5);

console.log('\n');

repetirFrase('Só duas vezes');

console.log('\n');

/* Closure

-> Uma função que se lembra do ambiente em que ela foi criada;

*/

function armazenarSoma (x) {
    return y => x + y;
}

let som1 = armazenarSoma(3);
console.log(som1(5)); // 8
console.log('\n');
let som2 = armazenarSoma(5);
console.log(som2(10)); //15
console.log('\n');

/* Recursion

-> Uma funcionalidade que permite uma função se chamar novamente;
-> Isso pode ser um problema caso a função se chama muitas vezes;

*/

function retornarNumeroPar(n){
    if(n % 2 == 0) {
        console.log('N agor é par' + n);
    }else {
        console.log(n);
        retornarNumeroPar(n -1);
    }
}

retornarNumeroPar(33);

console.log('\n');