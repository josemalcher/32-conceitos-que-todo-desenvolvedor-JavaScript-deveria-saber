var nome = 'Malcher jR';

function olaPessoa() {
    console.log('Olá ' + nome);
}

nome = 'JOSE';
olaPessoa(); // Olá JOSE

function buscaItem() {
    var numeroItem = 200;
    fetch('/minha/url/do/banco?item=' + numeroItem, {
        method: 'GET'
    }).then(resultado => {
        console.log('Busca pelo item ' + numeroItem + ' deu certo');
    })
}

