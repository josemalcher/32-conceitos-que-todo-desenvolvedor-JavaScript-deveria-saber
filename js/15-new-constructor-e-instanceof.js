function Usuario(nome) {
    // this = {}
    this.nome = nome;
    this.log = function () {
        console.log(this);
    };
    // return this
}

const jose = new Usuario('Jose');
console.log(jose); // Usuario { nome: 'Jose', log: [Function (anonymous)] }
console.log(jose instanceof Usuario); // true
console.log(jose instanceof String); // false
