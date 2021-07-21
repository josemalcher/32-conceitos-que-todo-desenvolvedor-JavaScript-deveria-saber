// inspect code
function teste() {
    console.log(this)
}
// teste();
// window {...}

//const dados = {nome: 'Malcher Jr.'};
/*
const saudacao = function (idade) {
    console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};
*/
// saudacao.call(dados, 36);
// Bem vindo Gabriel, sua idade é 36

/*
const dados = { nome : 'Malcher Jr'};
const argumentos = [36];
const saudacao = function (idade) {
    console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`)
};
*/
// saudacao.apply(dados, argumentos);
// Bem vindo Malcher Jr, sua idade é 36

const dados = {nome: 'Malcher Jr'}
const saudacao = function (idade) {
    console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`)
};
const bound = saudacao.bind(dados);
// bound(36);
// Bem vindo Malcher Jr, sua idade é 36
