// == e ===

// ==
console.log(3 == '3'); // true

/*
1 SE ambos são do mesmo tipo
null == underfined, se for, ele retorna true
number == string, se for, ele vai converter a string num numero
boolean == number, se for, ele converte o boolean num numero
boolean == string, se for, ele converte a string ara o boolean
objeto == primitivo, se for, ele converte o objeto numa string
*/

// ===
console.log(3 === '3');// false
console.log(3 === 3);// true

// É necessário que os valores e os tipos sejam iguais para ser true

//typeof
// é otimo para validação de tipos
console.log(typeof 'Malcher' === 'string')// true
