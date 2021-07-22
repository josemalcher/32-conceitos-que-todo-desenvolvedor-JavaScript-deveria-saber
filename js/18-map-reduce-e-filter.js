dados = [
    {nome: 'Caramelo', idade: 3, tipo: 'Cachorro'},
    {nome: 'Rex', idade: 6, tipo: 'Cachorro'},
    {nome: 'Bolota', idade: 9, tipo: 'gato'},
    {nome: 'thor', idade: 2, tipo: 'Cachorro'},
]

const cachorros = dados.filter((dado, index) => dado.tipo === 'Cachorro');
const idadeReal = cachorros.map((cachorro) => ({
    nome: cachorro.nome,
    idade: cachorro.idade * 7
}));
const totalIdades = idadeReal.reduce((soma = 0, dado) => {
    return soma + dado.idade;
}, 0)
//console.log(totalIdades) // 77

const idade = dados.filter((dado, index) => dado.tipo === 'Cachorro')
    .map((cachorro) => ({nome: cachorro.nome, idade: cachorro.idade * 7}))
    .reduce((soma = 0, dado) => {
        return soma + dado.idade;
    }, 0)
console.log(idade); // 77
