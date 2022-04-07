/* Precisamos falar sobre indetação

-> Serve para organizar o código e deixar mais legível;
-> Não há uma regra, porém cada bloco aninhado deve ser indetado 
uma vez;
-> Pessoas vão te agradecer no futuro por indetar o código!
-> Para a execução do código não afeta em nada.


*/

 let x = 0;
 let y = 0;


 if(x == 0 && y == 0) {
     let z = 5;
     if(z>2) {
         console.log(z);
         for(i = 0; i < 5; i = i + 1){
             console.log(i);
             if (i == 2){
                 console.log('i é = 2');
             }
         }
     }
 }

 console.log('\n');


  /* Forçando a saída de um loop: BREAK

 -> As vezes precisamos parar o loop antes que complete todo o seu ciclo;
 -> Para isso utilizamos o break;
 
  for(let b = 5; b < 20; b = b + 1){
     if (b % 10 == 10) {
         console.log('Saiu do loop');
         break;
     }
     console.log('Prosseguimos o loop');
 }

 console.log('\n');


 
 */


 let nome = 'Lucas';

 for(let a = 0; a < 10; a = a + 1){ 

    if( a == 3) {
        nome = 'João';
    }

    if(a == 5 && nome == 'João') {
        console.log('O nome é João, pode parar');
        break;
    }
    console.log(a);
 }

 console.log('\n');



 /* Pulando uma execução do loop: CONTINUE

 -> Dependendo da nossa lógica, podemos pulas o resto da execução
 do loop;
 -> Para isso utilizamos a palavra 'CONTINUE';

let x = 0

while(x < 11) {
    x = x + 1;
    if (x % 2 == 0){
        continue;
    }
    console.log(x);
    x = x + 1;
}

 */

for (let c = 10; c > 10; c = c - 1){

    if(c % 2 == 0){
        console.log('Caiu no continue');
        continue;
    }
    console.log(c);
}

console.log('\n');

/* Incrementando a variável: forma facil

-> Podemos incrementar uma variável de forma mais fácil: x += 1;
-> Ou até mesmo x++;

for(let numero = 0; numero < 10; numero += 1){
    console.log('O numero é:' + numero);
}


*/

let numero = 5;

while(numero < 50) {

    console.log(numero);
    
    numero += 10;
}

console.log('\n');


for(let n = 0; n < 10; n++) {
    console.log('O n é ' +n);
}

console.log('\n');