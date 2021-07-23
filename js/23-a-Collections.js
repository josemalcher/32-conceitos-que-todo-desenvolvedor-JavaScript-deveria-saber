const alfabeto = new Set(['a', 'b', 'c', 'c']);

console.log(alfabeto) // Set(3) { 'a', 'b', 'c' }

alfabeto.add('a');

console.log(alfabeto) // Set(3) { 'a', 'b', 'c' }

console.log(alfabeto.has('a')); // true

console.log(alfabeto[0]); // undefined

alfabeto.add('d');
alfabeto.add('e');
console.log(alfabeto) // Set(5) { 'a', 'b', 'c', 'd', 'e' }

alfabeto.delete('b');
console.log(alfabeto) // Set(4) { 'a', 'c', 'd', 'e' }

let dados = [1, 2, 3, 4, 5, 5, 5];
const numeros = new Set(dados);
console.log(numeros); // Set(5) { 1, 2, 3, 4, 5 }

dados = Array.from(numeros);
console.log(dados); // [ 1, 2, 3, 4, 5 ]

/* ------------------ */

const dadosMap = new Map([['nome', 'malcher'], ['idade', 36]]);
console.log(dadosMap);
// Map(2) { 'nome' => 'malcher', 'idade' => 36 }

dadosMap.set('estado', 'São Paulo');
console.log(dadosMap);
// Map(3) { 'nome' => 'malcher', 'idade' => 36, 'estado' => 'São Paulo' }

console.log(dadosMap.get('nome')) // malcher

dadosMap.forEach((dado, chave) => {
    console.log(dado, chave)
})
/*
malcher nome
36 idade
São Paulo estado
*/
