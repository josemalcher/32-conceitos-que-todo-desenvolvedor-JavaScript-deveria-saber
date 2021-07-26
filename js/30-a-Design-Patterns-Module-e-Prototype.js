const Carro = {
    tracao: '4x4',
    ligar() {
        return 'ligou';
    }
}
const meuCarro = Object.create(Carro, {dono: {value: 'Malcher Jr'}})

Carro.__proto__.desligar = function () {
    return 'desligou';
};
console.log(meuCarro.ligar())
console.log(meuCarro.desligar());
/*
ligou
desligou
*/
