// ------- Variáveis ------------
var c = 0; // ruim
var tempo = 13; // ruim
var chamadasRealizadasAPI = 0; // bom
var tempoParaAguardarRespostas = 14; // bom
var tempoAguardarINT = 0; // ruim
const CHAMADAS_REALIZADAS_PARA_API = 0; // bom

// ------- Funções ------------
function atualizaUsuarioLocal(id) { // RUIM
    http.get('url?id=' + id).then(dadosDoUsuario => {
        this.usuario = dadosDoUsuario;
    });
}

async function buscaUsuarioPorId(id) { // BOM
    return await http.get('url?id=' + id);
}

this.usuario = atualizaUsuarioLocal(1);
this.usuario = atualizaUsuarioLocal({
    nome: 'Malcher Jr', idade: 36
})
/**
* Atualiza o usuario local dos dados recebidos por argumentos
* params usuario Dados do usuário
**/
atualizaUsuarioLocal(usuario)
{
    usuario.nome, usuario.idade;
}

// ------- Objetos ------------
function criarUsuario(nome) {
    this.nome = nome;
    getNome = () => this.nome;
    setNome = (nome) => this.nome = nome;
    return {getNome, setNome}
}

const jose = criarUsuario('jose');

// ------- Classes ------------
class Utilitarios{
    constructor() {
        this.texto = '';
    }

    getTexto = () => this.texto;
    setTexto = (texto) => {
        this.texto = texto;
        return this;
    };
    maiusculo = () => {
        this.texto = this.texto.toUpperCase();
        return this;
    }
    reverter = () => {
        this.texto = this.texto.split('').reverse().join('');
        return this;
    }
}

const _utilitarios = new Utilitarios();
let texto = _utilitarios.setTexto('Malcher Jr').reverter().maiusculo().getTexto();
console.log(texto)
