/* Arrays

-> Possibilidade de adicionar um conjunto de valores a um variável;
-> O arrays deve ser escrito entre colchetes, separando os valores por
vírgulas, veja;


*/

let numeros = [1, 3, 5, 8, 12]

let informacoes = ['Lucas', 12, true,'Teste',2];

/* Podemos acessar um array pelo seu índice, por exemplo: informacoes[2]
-> lembrando que o primeiro índice sempre é 0, ou seja, para acessar o
primeiro elementro: informacoes[0]


*/

console.log(informacoes[0]);
console.log(informacoes[2]);

console.log('\n');

/* Propriedades

-> Propriedades são informações que podem ser verificada em um valor;
-> Quase todos os valores de JavaScript tem propriedades, menos null e undefined
-> Podemos acessar as propriedades de duas maneiras;

*/

console.log(numeros.length);
console.log(numeros['length']);
console.log(numeros[3]);

console.log('\n');

let nome = 'Lucas';

console.log(nome.length); // números de caracteres da string

console.log('\n');

/* Métodos 

-> Métodos são propriedades que funcionam como funções;
-> Strings e arrays contém métodos;

*/

let marca = 'Nike';

console.log(marca.toUpperCase); //Deixa tudo maiúsculo
console.log(marca.toLowerCase); //Deixa tudo minúsculo 

console.log('\n');

/* Objetos

-> Uma coleção de propriedades, parecidos com arrays
-> Podemos acessar estas propriedades

*/

let pessoa = {
    nome: 'Lucas',
    profissao: 'Desempregado',
    idade: 19,
}

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log('\n');

/* Objetos: deletando e criando propriedades

-> Podemos adicionar e deletar propriedades ao longos
nosso programa;

*/

let carro = {
    marca: 'BMW',
    portas: 4,
    eletrico: false,
    motor: 10,
}

console.log(carro.portas);

delete carro.portas;

console.log(carro.portas);

carro.tetoSolar = true;

console.log(carro.tetoSolar);

console.log('\n');


/* Objetos: mais sobre objetos

-> Podemos copiar todas as propriedades de um obj para outro;

*/

let objetoA = {
    prop1: 'test',
    prop2: 'testando',    
}

let objetoB = {
    prop3: 'propriedade'
}

Object.assign(objetoA, objetoB);

console.log(objetoA);

console.log('\n');


/* Objetos: mais sobre objetos

-> E também podemos verificar quais as chaves cada objeto possui;

*/

console.log(Object.keys(objetoA));
console.log(Object.values(objetoA));

console.log('\n');
/* Mutability(mutação)

-> Um objeto pode herdar todas as características do outro, virando
uma referência ao mesmo;

*/

 objetoA = {
    pontos: 10
};

objetoB = objetoA;

let objetoC = {
    pontos: 10
};

console.log(objetoA == objetoB); // true
console.log(objetoA == objetoC); // false

console.log('\n');

/* Loops em Arrays

-> Uma técnica muito utilizada na programação é o loop nos
arrays;
-> Como é uma lista com muitos valores, muitas vezes precisamos ver
cada um deles;


*/

numeros = [1,5,10,15,20,25];

for(let i = 0; i <= numeros.length; i++) {
    console.log(numeros[i]);
}

console.log('\n');

// Métodos de array: push e pop

 let pessoal = ['Matheus','Lucas','Daniele'];

let pessoaRemovida = pessoal.pop();

console.log(pessoal);

console.log(pessoaRemovida);

console.log('\n')

/* Métodos de array: shift e unshift

-> shift: remove o primeiro elemento de um array;
-> unshigt: adiciona um ou mais elementos no início de um array;

*/

let frutas = ['Maçã','Melão','Uva'];

let frutaRemovida = frutas.shift();

console.log(frutas);

console.log(frutaRemovida);

frutas.unshift('Maçã');

console.log(frutas);

console.log('\n');

/* Métodos de array: indexOf e lastIndexOf

-> IndexOf: encontra o índice de um determinado elemento;
-> lastIndexOf: encontra o último índice de um elemento;

*/

numeros = [0, 1, 2, 1, 0];

console.log(numeros.indexOf(0));
console.log(numeros.lastIndexOf(0));

console.log('\n');

/* Métodos de array: slice

-> Retorna um array a partir de outro array;
-> o array retornado é determinado pelos parâmetros que são os
índices de início e fim de novo array;

*/

numeros = [0,1,2,3,4,5];

console.log(numeros.slice(2,3));

console.log(numeros.slice(3));

console.log('\n');

/* Métodos de array: forEach

-> itera cada elemento do array;

*/

const nums = [1,2,3,4,5,6];

nums.forEach(num => {
    console.log(num);
})

console.log('\n');

/* Métodos de array: includes

-> Verifica se o array tem um determinado elemento;

*/

let carros = ['BMW','Fiat','Audi'];

console.log(carros.includes('Fiat'));

console.log('\n');

/*  Métodos de array: reverse

->  Inverte um array;

*/

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.reverse());

console.log('\n');

/*  Métodos de string: trim

-> Remove tudo que não é string

*/

let texto = ' \n teste \n';

console.log(texto.trim()); // teste

console.log('\n')

/* Métodos de string: padStart

-> Inserir caracteres antes da string;

*/

let milAoContrario = '1';

console.log(milAoContrario.padStart(4,'0'));

console.log('\n');

/* Métodos de string: split

-> Divide uma string por um separador. e retorna um array

*/

let frase = 'O rato roeu a roupa do rei de roma';

let palavras = frase.split(' ');

console.log(palavras);

console.log('\n');

/* Métodos de string:joi

-> Junta elementos em um array em uma frase, por meio
de um seperador

*/

let fraseMontada = palavras.join('<->');
console.log(fraseMontada);

console.log('\n');

/* Métodos de string: repeat

-> Repete uma string de acordo com um parâmetro number

 */

console.log('teste '.repeat(5));

console.log('\n');

/* Rest operator

-> Uma forma de uma função receber indefinidos parâmetros;
-> O Operador rest vai virar um array;
-> O Parâmetro é definido por: ...nome

*/

function imprimirNumeros (...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

console.log('\n');

/* Destructuring com objetos

-> Podemos definir variáveis com propriedades do objeto com uma
notação diferente, chamada destructuring;

*/

const person = {
    name: 'Lucas',
    lastname:'Marques'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);

console.log('\n');

/* Destructuring com array

-> Podemos definir variáveis com os valores de um array utilizando o 
destructuring;

*/

let nomes = ['Lucas','Samuel','Pedro'];

let [nomeA, nomeB, nomeC] = nomes;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);