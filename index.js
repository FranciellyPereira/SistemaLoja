// index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Caminho base para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App Express
const app = express();
const port = 8080;

// Middleware básico
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Sequelize (import padrao corrigido para export default)
import connection from './config/sequelize-config.js';

connection.authenticate()
.then(() => {
  console.log("Conexão com o banco de dados feita com sucesso");
})
.catch(err => console.error("Erro ao conectar ao banco:", err));


// Controllers
import * as clientesControllers from './controllers/ClientesControllers.js';
import * as produtosControllers from './controllers/ProdutosControllers.js';
import * as pedidosControllers from './controllers/PedidosControllers.js';

// Rotas principais
app.get('/', (req, res) => res.render('index'));
app.get('/clientes', clientesControllers.listarClientes);
app.post('/clientes/new', clientesControllers.cadastrarCliente);
app.get('/clientes/delete/:id', clientesControllers.excluirCliente);
app.get('/clientes/edit/:id', clientesControllers.mostrarEdicao);
app.post('/clientes/update/:id', clientesControllers.atualizarCliente);
app.get('/produtos', produtosControllers.listarProdutos);
app.get('/pedidos', pedidosControllers.listarPedidos);
app.get('/pedidos/:numero', pedidosControllers.detalharPedido);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});