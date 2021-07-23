/*
function contagem(numero) {
    console.log(numero);
    if (numero > 0) {
        contagem(numero - 1);
    }
}
*/

function contagem(numero) {
    for (; numero > 0; numero--) {
        console.log(numero)
    }
}

contagem(5);

/*
5
4
3
2
1
*/
