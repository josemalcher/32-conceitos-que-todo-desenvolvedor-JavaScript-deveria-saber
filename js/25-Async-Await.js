let mamaeLembrou = true;

const passarParaComprarBrinquedo = new Promise((resolve, reject) => {
    if (mamaeLembrou) {
        resolve(true);
    }else{
        reject(false);
    }
});

const sairParaBrincar = (resultado) =>{
    return new Promise(resolve => {
        if(resultado){
            resolve('vou sair para brincar');
        }else{
            resolve('Não vou sair para brincar');
        }
    })
};

async function vamosParaLoja() { // retorna uma primisses
    try{
        const mamaeLembrou  = await passarParaComprarBrinquedo
        const mensagem      = await sairParaBrincar(mamaeLembrou);
        console.log(mensagem);
        return 'Deu CERTO';
    }catch (naoLembrou) {
        const mensagem = await sairParaBrincar(naoLembrou);
        console.log(mensagem);
    }
}

//vamosParaLoja();
vamosParaLoja().then(resultado => console.log(resultado));
