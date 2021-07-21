const Mamifero = function (nome, som) {
    return {nome, som}
};

const cachorro = Mamifero('Cachorro', 'auaua');
console.log(cachorro);
//{ nome: 'Cachorro', som: 'auaua' }
