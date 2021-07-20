// var, let, const

// LEXICO

var name = 'Malcher';
function testeLexico() {
    function testeLexico2() {
        var variavel = "meu nome";
    }
}
testeLexico();

// GLOBAL
var a = 0;

function alterar() {
    a = 10;
}

console.log(a); // 0
alterar();
console.log(a); // 10

// Função
// igual o escopo Lexico, o que é criado dentro da função
// não esta disponivel fora dela

// BLoco
function bloco(){
    var teste;
    if (true) {
        teste = 'teste';
        //let teste2 = 'teste2'; //error
        var teste2 = 'teste2'; // OK - var fica disponivel para função
    }
    console.log('teste', teste);
    console.log('teste2', teste2);
    // teste teste
    // teste2 teste2
}
bloco();

// Hoisting
function blocoH(){
    var teste;
    var teste2; // <<<<<-------
    if (true) {
        teste = 'teste';
        teste2 = 'teste2'; // <<<-----------
    }
    console.log('teste', teste);
    console.log('teste2', teste2);
    // teste teste
    // teste2 teste2
}
bloco();
