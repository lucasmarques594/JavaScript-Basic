/* Booleans
-> Serve para guardar um valor de comparação, por exemplo;
Os unicos valores possiveis são:
true(verdadeiro);
false(falso)

*/
console.log(5>4);
console.log(3<10);
console.log(5>10);
console.log(3<2);

console.log("\n")
/*  Booleans: Comparações
Maior que: >
Menor que: <
Maior ou igual: >=
Menor ou igual: <=
Igual: ==
Diferente: !=
Idêntico: ===

*/
console.log("Booleans: Comparação");
console.log(5>=5);
console.log(5<=5);
console.log(5==4);
console.log(3!=3);
console.log(3===3);

console.log("\n")

// é possivel usar strings com booleans por exemplo;

console.log("Lucas" == "Lucas");
console.log('Lucas' == 'Samuel');

console.log("\n")

/*  Booleans: Operadores lógicos

-> Por meio de uma comparação resultam em um Boolean
  && - and -> para ser true, os dois 'lados' da comparação precisam ser true
  || - or -> para ser true, basta um dos 'lados' da comparação ser true;
  ! - not -> inverter os valores (true vira false);
*/

console.log("Operadores Lógicos \n");
console.log(5>6 && 2<5);
console.log(5>4 && 1<5);

console.log(5>10 || 2<5);
console.log(5>6 || 2<1);

console.log(!5>4);

console.log("\n");

/*  Booleans: Operador ternário
-> Faz um comparativo em apenas um linha de código;
-> Não é muito ultilizado e pode deixar o código complicado de ler;

  console.log(true ? 1:2);
   console.log(false ? 'falso':'verdadeiro');
*/

console.log(5>2 ? "É Sim":" É Não");


