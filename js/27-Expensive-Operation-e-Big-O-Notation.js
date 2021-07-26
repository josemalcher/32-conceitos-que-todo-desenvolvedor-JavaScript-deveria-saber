// O(1)
const dados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numero = dados.pop();
console.log(numero); // 9

// O(n)
function o_n(entrada, numero) {
    for (let i = 0, max = entrada.length; i < max; i++) {
        if (entrada[i] === numero) {
            return i;
        }
    }
    return -1;
}
console.log(o_n(dados, 2)); // 2

// O(n)²
function o_n_quadrado(entrada) {
    const matriz = [];
    for (let i = 0, max = entrada.length; i < max; i++) {
        matriz[i] = [];
        for (let j = 0, maxj = entrada.length; j < maxj; j++) {
            matriz[i].push(j)
        }
    }
    return matriz;
}
console.log(o_n_quadrado(dados));
/*
[
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ],
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8
  ]
]
*/

// O(n log n)
const entrada = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r'];

function quickSort(entrada) {
    if (entrada.length < 2) {
        return entrada;
    }
    let pivo = entrada[0];
    let esquerda = [];
    let direita = [];
    console.log(pivo);
    for (let i = 1, max = entrada.length; i < max; i++) {
        if (entrada[i] < pivo) {
            esquerda.push(entrada[i]);
        }else{
            direita.push(entrada[i]);
        }
    }
    console.log(esquerda, direita);
    return [...quickSort(esquerda), pivo, ...quickSort(direita)];
}

console.log(quickSort(entrada));
/*
q
[ 'a', 'e', 'd', 'c' ] [ 'z', 'w', 's', 'x', 'r' ]
a
[] [ 'e', 'd', 'c' ]
e
[ 'd', 'c' ] []
d
[ 'c' ] []
z
[ 'w', 's', 'x', 'r' ] []
w
[ 's', 'r' ] [ 'x' ]
s
[ 'r' ] []
[
  'a', 'c', 'd', 'e',
  'q', 'r', 's', 'w',
  'x', 'z'
]

*/
