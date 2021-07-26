const pilha = []
pilha.push(0)
pilha.push(1)
pilha.push(2)
pilha.push(3)
console.log(pilha); // [ 0, 1, 2, 3 ]
pilha.pop()
console.log(pilha); // [ 0, 1, 2 ]

const pilha2 = []
pilha2.unshift(0)
pilha2.unshift(1)
pilha2.unshift(2)
pilha2.unshift(3)
console.log(pilha2); // [ 3, 2, 1, 0 ]
pilha2.shift()
console.log(pilha2);// [ 2, 1, 0 ]

const fila = [];
fila.push(0);
fila.push(1);
fila.push(2);
fila.push(3);
fila.push(4);
console.log(fila) // [ 0, 1, 2, 3, 4 ]
fila.shift(4);
console.log(fila) // [ 1, 2, 3, 4 ]

