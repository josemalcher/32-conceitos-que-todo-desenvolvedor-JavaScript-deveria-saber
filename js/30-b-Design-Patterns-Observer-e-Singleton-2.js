const impressora = (function (){
    let instanciaDaImpressora;

    function criar() {
        function imprimir(){
            console.log('Imprimindo documento');
        }
        function ligar(){
            console.log('Ligando Impressora');
        }
        return{ imprimir , ligar}
    }
    return{
        pegarInstancia: function (){
            if (!instanciaDaImpressora) {
                instanciaDaImpressora = criar();
            }
            return instanciaDaImpressora;
        }
    }
})();

const impressoraDaEmpersa1 = impressora.pegarInstancia();
const impressoraDaEmpersa2 = impressora.pegarInstancia();
impressoraDaEmpersa1.ligar();
console.log(impressoraDaEmpersa1);
console.log(impressoraDaEmpersa1 === impressoraDaEmpersa2);

/*
Ligando Impressora
{ imprimir: [Function: imprimir], ligar: [Function: ligar] }
true
*/
