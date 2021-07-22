const Usuario = function (nome) {
    this.nome = nome;
};

const jose = new Usuario('Jose');

Usuario.prototype.getNome = function () {
    console.log(this.nome);
};

jose.getNome(); // jose

// jose.__proto__ // {getNome: f, contructor: f ...}
