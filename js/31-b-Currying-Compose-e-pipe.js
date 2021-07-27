// --------- CURRYING -------------
// const dragao = (nome, tamanho, elemento) => {
//     return `${nome} é um dragão ${tamanho} e cospe ${elemento}!`;
// };
// console.log(dragao('Mashu', 'pequeno', 'fogo'));
// Mashu é um dragão pequeno e cospe fogo!

const dragao1 = (nome) => (tamanho) => (elemento)=>{
    return `${nome} é um dragão ${tamanho} e cospe ${elemento}!`;
};
// console.log(dragao('Mashu', 'pequeno', 'fogo'));
// Mashu é um dragão pequeno e cospe fogo!

const mashu = dragao1('Mashu');
console.log(mashu('grande')('gelo'));
// Mashu é um dragão grande e cospe gelo!

console.log(mashu('pequeno')('fogo'));
// Mashu é um dragão pequeno e cospe fogo!

const machuPequeno = mashu('pequeno');
console.log(machuPequeno('AR-quente'));
// Mashu é um dragão pequeno e cospe AR-quente!

// --------- Composer -------------
const incrementar = x => x + 1;
const dobrar = x => x * 2;
// const valor = incrementar(3);
// const resultado = dobrar(valor);
// console.log(resultado);
const valor = 3;
const resultado = dobrar(incrementar(valor));
console.log(resultado); // 8

// --------- PIPE -------------

const pipe = (inc, dob) => (args) => dob(inc(args));
const incrementaEDobra = pipe(incrementar, dobrar);
const resultado2 = incrementaEDobra(3);
console.log(resultado2) // 8
