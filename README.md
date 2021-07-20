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

6. 5 - == vs === vs typeof

7. 6 - Escopo global, de função, do bloco e léxico

8. 7 - Expressão e Declaração

9. 8.a - IIFE e Namespaces

10. 8.b - Módulos

11. 9 - Fila de eventos e Pilha de eventos

12. 10 - SetTimeout, SetInterval, requestAnimationFrame

13. 11 - Operadores Bitwise

14. 12 - DOM e Árvore de layout

15. 13.a - Factories

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
