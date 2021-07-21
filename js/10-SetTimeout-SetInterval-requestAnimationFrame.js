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
