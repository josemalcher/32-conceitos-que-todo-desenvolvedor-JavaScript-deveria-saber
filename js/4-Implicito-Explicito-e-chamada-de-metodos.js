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
