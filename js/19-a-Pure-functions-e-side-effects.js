/*
const soma = (x, y) => X + y;

let nome = '';
const alterarNome = (novoNome) => {
    nome = novoNome;
};
*/
const usuario = {nome: 'Malcher JR', pontos: 0}
/*
const alteraUsuario = (usuario) => {
    usuario.nome = usuario.nome.toUpperCase();
    usuario.pontos += 1;
    return usuario;
}
alteraUsuario(usuario);
console.log(usuario) // { nome: 'MALCHER JR', pontos: 1 }
*/
const nomeMaiusculo     = (nome)   => nome.toUpperCase();
const incrementaPontos  = (pontos) => pontos + 1;
usuario.nome   = nomeMaiusculo(usuario.nome);
usuario.pontos = incrementaPontos(usuario.pontos);
console.log(usuario) // { nome: 'MALCHER JR', pontos: 1 }




