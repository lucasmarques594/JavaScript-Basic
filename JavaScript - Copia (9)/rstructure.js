/* O que são estrutura de repetição?

-> A ideia é repetir uma ação até atingir uma condição;
-> Ao invés de repetirmos o mesmo código várias vezes, criamos um
statement que fará uma checagem em cada loop;
-> Também chamado de loop;

*/

/*  Estrutura de repetição: while

-> Fará uma ação, até que a condição seja atingida;
-> Precisamos realmente 'definir um fim' para o loop, para não termos
o problema de loop infinito;

*/

let x = 10

while(x > 0){
    console.log(x);
    x = x - 1;
}

console.log('\n');

let y = 0;

while(y <= 10){
    console.log(y);
    y = y + 1;
} // Operação ao contraria do valor X 


console.log('\n');

/*
let z = 10

while(z > 0){
    console.log(z); // é executado infinitamente
}

*/

/* Estrutura de repetição: do while

-> Semelhante ao while, porém a estrutura muda um pouco
-> Este método quase não é utilizado!

*/

let d = 0;

do {
    console.log(d);
    d = d + 1;
} while (d < 5);

console.log('\n');

/* Estrutura de reptição: for

-> Semelhante ao while, porém amplamente utilizado

*/



for(let numero = 2; numero < 100; numero = numero * 2) {
    console.log('numero é: ' + numero);
}
      