const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Controllers
const clientesControllers = require('./Controllers/ClientesControllers');
const produtosControllers = require('./Controllers/ProdutosControllers');
const pedidosControllers = require('./Controllers/PedidosControllers');

// Rotas
app.get('/', (req, res) => res.render('index'));
app.get('/clientes', clientesControllers.listarClientes);
app.get('/produtos', produtosControllers.listarProdutos);
app.get('/pedidos', pedidosControllers.listarPedidos);
app.get('/pedidos/:numero', pedidosControllers.detalharPedido);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
