const pedido = {titulo: 'Meu Pedido', status: false}

const copiaPedido = (pedido) => {
    const novoPedido = Object.assign({}, pedido);
    novoPedido.status = true;
    return novoPedido;
}

const novoPedido = copiaPedido(pedido);
novoPedido.titulo = 'Segundo Pedido';

console.log(pedido)     // { titulo: 'Meu Pedido', status: false }
console.log(novoPedido) // { titulo: 'Segundo Pedido', status: true }
