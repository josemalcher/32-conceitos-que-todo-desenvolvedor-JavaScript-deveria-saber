function iteraNumeros(total) {
    for (let i = 1; i <= total; i++) {
        console.log(i)
    }
}
iteraNumeros(5);
/*
1
2
3
4
5
*/

/*
function* iteraGenerate(total) {
    for (let i = 1; i <= total; i++) {
        yield console.log(i);
    }
}

const totalGenerator = iteraGenerate(5);
totalGenerator.next();
totalGenerator.next();
totalGenerator.next();*/
/*
1
2
3
*/

function* iteraGenerate(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

const totalGenerator = iteraGenerate(5);
console.log(totalGenerator.next().value);
console.log(totalGenerator.next().value);
console.log(totalGenerator.next().value);
console.log(totalGenerator.next().value);
console.log(totalGenerator.next().value);
console.log(totalGenerator.next().value);
console.log(totalGenerator.next().value);
/*
1
2
3
4
5
undefined
undefined
*/
