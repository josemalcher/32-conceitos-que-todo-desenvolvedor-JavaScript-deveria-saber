/*

let Usuario = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

const jose = new Usuario('Jose', 36);
const novoJose = Object.create(jose);
console.log(novoJose instanceof Usuario); // true
console.log(novoJose.nome); // Jose

*/

function Carro(cor) {
    this.cor = cor;
    this.descricao = descricao;
}

Carro.prototype.pegaInformacaoes = function () {
    return this.descricao + ' e a cor ' + this.cor;
};

let meuCarro = Object.create(Carro.prototype);
meuCarro.cor = 'Azul';
// console.log(meuCarro.pegaInformacaoes()); // undefined e a cor Azul

const novoCarro = Object.create(Carro, {
    cor: {writable: true, configurable: true, value: 'vermelho'},
    descricaoPadrao: {writable: false, configurable: true, value: 'Meu carro'},
    descricao: {
        configurable: true,
        get: function () {
            return this.descricaoPadrao.toUpperCase();
        },
        set: function (valor) {
            this.descricaoPadrao = valor.toLowerCase();
        }
    }
})
novoCarro.descricaoPadrao = 'Nova Descricao...';
console.log(novoCarro.descricao);
// MEU CARRO
