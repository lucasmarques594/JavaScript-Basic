/*  Como salvar valores na memória

-> Salvamos os valores em variáveis (isto é um statement);
-> let laranjas = 5;
    e depois podemos criar expressões com valores salvos;
*/


let laranjas = 5;

console.log(laranjas * laranjas);
console.log(`Tem ${laranjas} na sexta`);

console.log('\n');
/*
-> Podemos também mudar o valor que foi salvo anteriormente;
-> laranjas = laranjas + 1;
    um let pode definir várias variáveis também;

*/ 

laranjas = laranjas + 1;

console.log(laranjas);

let quadrado = 4, triangulo = 3, retangulo = 4;
console.log(quadrado*(triangulo+retangulo));

/*   Outras maneiras de salvar valor

-> Podemos definir valores com var e const;


*/
console.log('\n');


var nome = "Lucas";
console.log(nome);

const sobrenome = 'Marques';
console.log(sobrenome);

console.log('\n');

/* 
  -> VAR é uma forma mais antiga, você deve optar por let ou const;
  -> CONST vem de constante, ou seja, o seu valor não pode ser alterado;
  
*/


/*    Convenção no nome de variáveis

-> Não pode começar com um número (let 2test);
-> Mas pode terminar com número (let test3 = 'testado';);
-> Pode ter $ ou _, mas não outros caracteres especiais (let $nome, _nome);
-> Mas não pode ter pontuação ou outros especiais (let @test);
-> Podemos iniciar com letra maiúscula (let Nome = 'Lucas');
-> Ou usar o camelCase (let meuPrimeiroNome = 'Lucas');

*/


let test3 = 'eu ';
let $test = 'amo ';
let _test = 'pão ';
let Test  = 'com ';
let meuTest = 'ovo';

console.log(test3,$test, _test, Test, meuTest);
console.log('\n');

/*  Nome de variáveis reservados
-> alguns nomes não pode ser ultilizados para iniciar variáveis, veja:

[break,case,catch,class,const,continue,debugger,default,delete,do,else
enum,export,extends,false,finaly,for,function,if,implements,import,interface,
in,intanceof,let,new,package,private,protected,public,return,static
super,switch,this,throw,true,try,typeof,var,void,while,whith,yield]

ex: let break = 'parar'; (erro no nome da variável)

-> Porém podemos usar elas + algumas palavras/digito:

ex let breakLucas = 'Parar Lucas';

*/

let breakLucas = 'Parar Lucas';
console.log(breakLucas);



