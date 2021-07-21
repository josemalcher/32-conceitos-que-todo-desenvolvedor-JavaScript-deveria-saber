class Animal {
    constructor(pes) {
        this.pes = pes;
    }

    quantidadePes() {
        console.log('Eu Tenho ' + this.pes + ' pés/patas');
    }
}

class Mamifero extends Animal{

    constructor(nome, som, pes) {
        super(pes);
        this.nome = nome;
        this.som = som;
    }

    emitirSOm() {
        console.log('Esse animal faz ' + this.som);
    }
}

const cachorro = new Mamifero('Cachorro', 'auau', 4);
cachorro.emitirSOm(); // Esse animal faz auau
cachorro.quantidadePes(); // Eu Tenho 4 pés/patas

