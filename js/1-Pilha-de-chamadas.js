// first in firts out = FIFO = O primeiro que entrou é o primeiro a sair
// last in las outr = LIFO = O último que entra é o primeiro que sai

function funcao1() {
funcao2();
console.log('executou função 1');
}

function funcao2() {
funcao3();
console.log('executou função 2');
}

function funcao3() {
console.log('executou função 3');
}

funcao1();
/*
executou função 3
executou função 2
executou função 1
*/
