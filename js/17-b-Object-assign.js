const alvo = {a: 1, b: 2}
const dados = {b: 1, c: 2}
const resultado = Object.assign(alvo, dados);
resultado.a = 'a';
console.log(resultado); // { a: 'a', b: 1, c: 2 }
console.log(alvo); // { a: 'a', b: 1, c: 2 }

const obj1 = {a: 1, b: 3}
const obj2 = {c: 4, d: 5}
const result = Object.assign({}, obj1, obj2);
console.log(result);
// { a: 1, b: 3, c: 4, d: 5 }


