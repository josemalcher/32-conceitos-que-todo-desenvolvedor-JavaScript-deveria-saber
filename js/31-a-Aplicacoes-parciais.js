function lista(juncao, ...itens) {
    const separadoPorVirgula = itens.slice(0, -1).join(', ');
    const ultimoItem = itens.pop();
    return `${separadoPorVirgula} ${juncao} ${ultimoItem}`;
}
/*
function parcial(funcao, juncao) {
    return (...itens) =>{
        return funcao(juncao, ...itens);
    }
}
*/
const parcial = (funcao, juncao) => (...itens) => funcao(juncao, ...itens);

const listaE  = parcial(lista, 'e');
const listaOu = parcial(lista, 'ou');
const listaTalvez = parcial(lista, 'talvez');

console.log(listaE('azul', 'amarelo', 'verde'));
console.log(listaOu('azul', 'amarelo', 'verde'));
console.log(listaTalvez('azul', 'amarelo', 'verde'));

console.log(lista('ou', 'azul', 'amarelo', 'verde'));

/*
azul, amarelo e verde
azul, amarelo ou verde
azul, amarelo talvez verde
azul, amarelo ou verde
*/
