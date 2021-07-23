function mostraAlerta() {
    alert('Clicou no logo');
}

document.getElementById('logo-default')
    .addEventListener('click', mostraAlerta);

const maiusculo = function (texto) {
    return texto.toUpperCase();
};

maiusculo('malcher');

function chamaAlerta() {
    return mostraAlerta();
}

chamaAlerta()();

