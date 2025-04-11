const pedidos = [
    { numero: 1, valor: 84.80, data: '15-01-2025', cliente: 'João', produtos: ['Urso Caramelo Fofux', 'Coelhinha Rosa Mimo'] },
    { numero: 2, valor: 93.80, data: '20-02-2025', cliente: 'Maria', produtos: ['Gatinho', 'Cachorrinho Fofo'] },
    { numero: 3, valor: 59.90, data: '10-03-2025', cliente: 'Carlos', produtos: ['Dinossaurinho'] },
    { numero: 4, valor: 44.90, data: '15-03-2025', cliente: 'Ana', produtos: ['Gatinho'] },
    { numero: 5, valor: 84.80, data: '05-04-2025', cliente: 'Lucas', produtos: ['Urso Caramelo Fofux', 'Coelhinha Rosa Mimo'] },
];

exports.listarPedidos = (req, res) => {
    res.render('pedidos', { pedidos });
};

exports.detalharPedido = (req, res) => {
    const numero = parseInt(req.params.numero);
    const pedido = pedidos.find(p => p.numero === numero);

    if (pedido) {
        res.render('detalhes', { pedido });
    } else {
        res.status(404).send('Pedido não encontrado');
    }
};
