/*  Como funciona o ambiente

-> Quando qualquer programa é iniciado, um ambiente é criado;
-> E este ambiente não inicia vazio;
-> Ele contem FUNÇÕES nativas da linguagem;
-> Funções são blocos de códigos, que nos retornam um valor ou ação;
-> o Ambiente de JavaScript, neste curso, poderiamos entender como o navegador;

   

   A Estrutura de uma função

-> Antes de mais nada: função são chamadas durante o programa;
-> Você também pode ouvir: executar, chamar, invocar uma função;
-> E nós chamamos  a função utilizando o nome dela + abrindo e fechando parênteses;  


*/

// nomeDaFuncao();

/* 
 ->  Também podemos inserir parâmetros, em algumas funções são obrigatórios;
 ->  Basicamente são valores que podem mudar o resultado da função;

*/

// nomeDaFuncao(paramentro1, paramentro2);


/*   Função built-in: prompt()

-> Recebe um input do usuário do sistema e pode guardar este valor;
       Esta função é pouco utilizada.

*/

 let idade = prompt('Qual sua idade?'); //So aparece se for usado no console do navegador
 console.log(idade); 


 /*  Função built-in: alert()
 -> Exibe uma mensagem na tela do usuário;
       Esta função é pouco utilizada.
 
 */

alert('Veja esta mensagem!');   // é emitido a mensagem so pelo navegador 


/*  Função built-in: math.x()
-> Função utilizada para expressões/cálculos matemáticos;
       Esta função é muito utilizada.

*/

let maiorNumero = Math.max(1,5,2,3,4,7,23);
console.log(maiorNumero);

let menorNumero = Math.min(1,5,2,3,4,7,23);
console.log(menorNumero);

let arredondar = Math.round(5.999999923);
console.log(arredondar);

let arredondarParaCima = Math.ceil(5.99999923);
console.log(arredondarParaCima);


/*  Função built-in: console.log()
-> Exibe uma mensagem na tela, o que é o argumento que passamos;
        Esta função é muito utilizada.

*/

console.log('Exibi a mensagem!');