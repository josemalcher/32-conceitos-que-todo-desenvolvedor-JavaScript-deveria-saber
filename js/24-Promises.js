const mamaeLembrou = true;

const passarParaComprarBrinquedo = new Promise((resolve, reject) => {
    if (mamaeLembrou) {
        resolve(true);
    } else {
        reject(false);
    }
})

const sairParaBrincar = (resultado) => {
    return new Promise((resolve => {
        if (resultado) {
            resolve('vou sair para brincar');
        } else {
            resolve('não vou sair para brincar');
        }
    }))
}

/*passarParaComprarBrinquedo.then(lembrou => {
    console.log('lembrou');
}).catch(naoLembrou => {
    console.log('não lembrou');
})*/

console.log('indo para a loja');
passarParaComprarBrinquedo
    .then(sairParaBrincar)
    .catch(sairParaBrincar)
    .then(resultado => {
        console.log(resultado);
    });
console.log('voltei da loja');

/*
    indo para a loja
    voltei da loja
    vou sair para brincar
*/
