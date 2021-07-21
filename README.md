# 32-conceitos-que-todo-desenvolvedor-JavaScript-deveria-saber

1. Introdução

- [https://github.com/leonardomso/33-js-concepts](https://github.com/leonardomso/33-js-concepts)

2. 1 - Pilha de chamadas

```js
// first in firts out = FIFO = O primeiro que entrou é o primeiro a sair
// last in las outr = LIFO = O último que entra é o primeiro que sai

function funcao1() {
funcao2();
console.log('executou função 1');
}

function funcao2() {
funcao3();
console.log('executou função 2');
}

function funcao3() {
console.log('executou função 3');
}

funcao1();
/*
executou função 3
executou função 2
executou função 1
*/

```

3. 2 - Tipos primitivos

- []()

```javascript
console.log(typeof true); // boolean
console.log(typeof Boolean(true)); // boolean
console.log(typeof new Boolean(true)); // object
console.log(typeof 'Malcher'); // string
console.log(typeof 28); // number

console.log('Malcher'.length); // 7

var doze = new Number(12); //
var quinze = doze + 3;
console.log(quinze); //15

console.log(typeof doze); // object
console.log(typeof quinze);// number

```

4. 3 - Tipos de valores e tipos de referência

- [js/3-Tipos-de-valores-e-tipos-de-referencia.js](js/3-Tipos-de-valores-e-tipos-de-referencia.js)

```javascript
var x = 10; // mem.001 = nome é x, e o calor é 10
var y = x;
x = 20;
console.log(x, y); // 20  10

var t = {valor: 10}
var f = x;
t.valor = 80;
f.valur = 40;
/*
local mem.0002 = {valor: 10}
variavel t = mem.0002
variavel f = t = mem.0002
*/

console.log(t); // { valor: 80 }
console.log(f); // 20


```

5. 4 - Implícito, Explicito e chamada de métodos

- [js/4-Implicito-Explicito-e-chamada-de-metodos.js](js/4-Implicito-Explicito-e-chamada-de-metodos.js)

```javascript
// COERÇÃO
console.log('5' - 5) // 0
console.log('5' + 5) // 55
console.log(true + 1)// 2
console.log(true + true) // 2
console.log([] + {}) // [object Object]
console.log([] + []) //

// IMPLICITO
console.log(+'5') // 5
console.log(5+ '')// 5
console.log(123 && 'oi')// oi
console.log(null || true)// true

//Explicito
console.log(Number('50')) // 50
console.log(String(50))   // 50

/*
JAVA
Public Integer somaNumeros(Integer a, Integer b){return a+ b}
JavaScript
function somaNumeros(a,b){return a + b} 
*/

```

6. 5 - == vs === vs typeof

- [js/5-two-equal-vs-triple-equal-vs-typeof.js](js/5-two-equal-vs-triple-equal-vs-typeof.js)

```javascript
// == e ===

// ==
console.log(3 == '3'); // true

/*
1 SE ambos são do mesmo tipo
null == underfined, se for, ele retorna true
number == string, se for, ele vai converter a string num numero
boolean == number, se for, ele converte o boolean num numero
boolean == string, se for, ele converte a string ara o boolean
objeto == primitivo, se for, ele converte o objeto numa string
*/

// ===
console.log(3 === '3');// false
console.log(3 === 3);// true

// É necessário que os valores e os tipos sejam iguais para ser true

//typeof
// é otimo para validação de tipos
console.log(typeof 'Malcher' === 'string')// true

```

7. 6 - Escopo global, de função, do bloco e léxico

- [js/6-Escopo-global-de-funcao-do-bloco-e-lexico.js](js/6-Escopo-global-de-funcao-do-bloco-e-lexico.js)

```javascript
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

```

8. 7 - Expressão e Declaração

- [js/7-Expressao-e-Declaracao.js](js/7-Expressao-e-Declaracao.js)

```javascript
console.log(1 + 1);
console.log(Math.random() + 5)

function expressao() {
    return 1 + 1
}

console.log(expressao());

var variavel = 20;

if (true) {
    variavel = 30;
}

function soma(a) {
    return a + 10;
}

console.log(soma(Math.random()));

function teste(){
    variavel = 40;
}

```

9. 8.a - IIFE e Namespaces

- [js/8-a-IIFE-e-Namespaces.js](js/8-a-IIFE-e-Namespaces.js)

```javascript
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

```

10. 8.b - Módulos

- [js/8-b-Modulos-utilitario.js](js/8-b-Modulos-utilitario.js)

```javascript
const valor = 5;

const helloWord = function () {
    console.log('OLÁ MUNDO');
};

const multiplica = function (x) {
    console.log(x * valor);
};

//export {helloWord, multiplica};
export default helloWord;


```

- [js/8-b-Modulos-app.js](js/8-b-Modulos-app.js)

```javascript
//import {helloWord as olamundo, multiplica} from "./8-b-Modulos-utilitario.js";
//import {helloWord,  multiplica} from "./8-b-Modulos-utilitario.js";
//helloWord();
//olamundo();

import helloWord from "./8-b-Modulos-utilitario.js";

helloWord();

```

11. 9 - Fila de eventos e Pilha de eventos

![img/event-loop.png](img/event-loop.png)

- [js/9-Fila-de-eventos-e-Pilha-de-eventos.js](js/9-Fila-de-eventos-e-Pilha-de-eventos.js)

```javascript
function loopEventos() {
    console.log('a');
    for (let i = 1; i <= 4; i++) {
        console.log( 'b - ' + i)
    }
    console.log('c');

    setTimeout(() => {
        console.log('d');
    }, 0);
    console.log('e');
}

loopEventos();
/*
a
b - 1
b - 2
b - 3
b - 4
c
e
d
*/

```

12. 10 - SetTimeout, SetInterval, requestAnimationFrame

- [js/10-SetTimeout-SetInterval-requestAnimationFrame.js](js/10-SetTimeout-SetInterval-requestAnimationFrame.js)

```javascript
/*
const mostraAlerta = (nome) => {
    console.log('Set Timeout - ' + nome);
};

const timeout = setTimeout(mostraAlerta, 3500, 'Malcher Jr');
// Set Timeout - Malcher Jr

setTimeout(()=>{
    clearTimeout(timeout); // 'calcela' timeout
}, 1500)
*/

/*
const interval = setInterval(() => {
    console.log('teste');
}, 1000)

setInterval(()=> {
    clearInterval(interval);
}, 5000)
*/

/*
teste
teste
teste
teste
*/

let contador = 0;

function animation() {
    contador += 1;
    console.log(contador);
    loop = requestAnimationFrame(animation);
}

let loop = requestAnimationFrame(animation);

setTimeout(() => {
    cancelAnimationFrame(loop);
}, 5000)

```

13. 11 - Operadores Bitwise

- [js/11-Operadores-Bitwise.js](js/11-Operadores-Bitwise.js)

```javascript
console.log(Number(113).toString(2)); // 1110001
console.log(parseInt('1110001', 2)); // 113

// 00000001 = 1
// 00000010 = 2
// 00000011 = R

console.log(3 & 2); // 2
console.log(parseInt(11, 2)); // 3

```

14. 12 - DOM e Árvore de layout

![img/Dom-Tree-of-An-Example-Web-Page.png](img/Dom-Tree-of-An-Example-Web-Page.png)

15. 13.a - Factories

- [js/13-a-Factories.js](js/13-a-Factories.js)

```javascript
const Mamifero = function (nome, som) {
    return {nome, som}
};

const cachorro = Mamifero('Cachorro', 'auaua');
console.log(cachorro);
//{ nome: 'Cachorro', som: 'auaua' }

```

16. 13.b - Classes

17. 14 - This, call, apply e bind

18. 15 - new, constructor e instanceof

19. 16 - Prototype inheritance e prototype chain

20. 17.a - Object.create

21. 17.b - Object.assign

22. 18 - map, reduce e filter

23. 19.a - Pure functions e side effects

24. 19.b - State Mutation

25. 20 - Closures

26. 21 - High Order Functions

27. 22 - Recursion

28. 23.a - Collections

29. 23.b - Generators

30. 24 - Promises

31. 25 - Async/Await

32. 26.a - Data Structures: Stack e Queue

33. 26.b - Data Structures: Linked list e Tree

34. 27 - Expensive Operation e Big O Notation

35. 28 - Algoritmos

36. 29 - Herança, Polimorfismo e reutilização de código

37. 30.a - Design Patterns: Module e Prototype

38. 30.b - Design Patterns: Observer e Singleton

39. 31.a - Aplicações parciais

40. 31.b - Currying, Compose e pipe

41. 32 - Clean Code

42. Encerrando

43. Bônus - Redes sociais e mais
