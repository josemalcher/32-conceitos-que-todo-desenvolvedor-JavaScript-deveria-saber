/*
const alerta = function () {
    console.log('alerta!');
};
alerta();
// alerta!
*/
/*
!function () {
    console.log('ALERTA');
}();
// ALERTA
*/
/*
(function (){
    console.log('Alerta ()()')
})()
// Alerta ()()
*/
/*
!function teste() {
    console.log('com nome da funcao')
}();
// com nome da funcao
*/
/*
var variavel = 30
!function (){
    variavel = 99
}()
console.log(variavel); // 99
*/
var dados = (function (){
    var contador = 0;
    return {
        incrementar: function () {
            contador = contador + 1;
            return contador;
        }
    }
})();

console.log(dados.incrementar()); // 1
console.log(dados.incrementar()); // 2
console.log(dados.incrementar()); // 3
console.log(dados.contator); //undefined
