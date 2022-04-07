/*  JSON

-> JSON = JavaScript Object Notation;
-> Utilizando para comunicação entre serviços, ex: back end <-> front end;
-> Basicamente um tipo de dado padronizado, que lembra muito os 
object do JavaScript;

*/




let pessoa = {
    "nome": "Lucas",
    "idade": 19
}

console.log(pessoa.nome);
console.log(pessoa.idade);

/* JSON

-> Rigoroso na estrutura, ou seja, deve seguir um padrão imposto
por este formato
-> Apenas aspas duplas;
-> Não aceita comentários;


-> JSON PARA STRING

-> Podemos converter o JSON para uma string de forma fácil;
-> Ou também uma string para JSON;

*/


const car = {
    "brand": "BMW",
    "wheels":4,
    "doors":2,
    "type":"Sedan"

}

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log((stringToJson));

