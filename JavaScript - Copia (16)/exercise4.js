/* Exercício 26

-> Crie um array com 5 itens;
-> acesse o item 1,3,4

*/

let itens = ["a","b","c","d","e"];

console.log(itens[0]);
console.log(itens[2]);
console.log(itens[3]);

console.log('\n');

/* Exercício 27

-> Crie um array com 2 elemento e outro com 4;
-> Imprima o número de elementos de cada um na tela;


*/

let nomes = ["Lucas","Samuel"];

let test = [true,false,false,true];

console.log(nomes.length);
console.log(test.length);

console.log('\n');

/* Exercício 28

-> Crie um objeto onibus
-> Com as propriedades rodas = 8
-> limite de passageiros = 40
-> Portas = 2;
-> Imprima todas as propriedades no console.log;

*/

let onibus = {
    rodas : 8,
    passageiros : 40,
    portas : 2
}

console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);

console.log('\n');

/* Exercício 29

-> Adicione a propriedades janelas no ônibus, com o valor 20;
-> delete a propriedade rodas
-> imprima a propriedade janelas no console

*/

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus.janelas);

console.log('\n');

/* Exercício 30

-> Crie um array com 5 nomes
-> Verifique se seu nome existe no array;
-> Se existir imprima alguma mensagem no console;


*/

nomes = ['Lucas','Samuel','Maria','Matheus','Ana'];

if(nomes.includes('Lucas')) {
    console.log('O nome foi encontrado!');
} else{
    console.log('O nome não foi encontrado!');
}

