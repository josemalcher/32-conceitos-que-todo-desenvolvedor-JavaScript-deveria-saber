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
