const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

const clientes = [
    { nome: 'João', cpf: '123.456.789-00', endereco: 'Rua A, 123', telefone: '99999-0001', email: 'joao@example.com' },
    { nome: 'Maria', cpf: '987.654.321-00', endereco: 'Rua B, 456', telefone: '99999-0002', email: 'maria@example.com' },
    { nome: 'Carlos', cpf: '111.222.333-44', endereco: 'Rua C, 789', telefone: '99999-0003', email: 'carlos@example.com' },
    { nome: 'Ana', cpf: '444.555.666-77', endereco: 'Rua D, 321', telefone: '99999-0004', email: 'ana@example.com' },
    { nome: 'Lucas', cpf: '555.444.333-22', endereco: 'Rua E, 654', telefone: '99999-0005', email: 'lucas@example.com' },
];

const produtos = [
    { nome: 'Urso Caramelo Fofux', preco: 39.90, categoria: 'Ursinhos', imagem: 'Urso.png' },
    { nome: 'Gatinho', preco: 44.90, categoria: 'Gatinhos', imagem: 'Gatinho.png' },
    { nome: 'Cachorrinho Fofo', preco: 49.90, categoria: 'Cãezinhos', imagem: 'Cachorro.png' },
    { nome: 'Coelhinha Rosa Mimo', preco: 34.90, categoria: 'Coelhinhos', imagem: 'Coelhinha.png' },
    { nome: 'Dinossaurinho', preco: 59.90, categoria: 'Dinos', imagem: 'Dinossauro.png' },
];

const pedidos = [
    {
        numero: 1,
        valor: 84.80,
        data: '15-01-2025',
        cliente: 'João',
        produtos: ['Urso Caramelo Fofux', 'Coelhinha Rosa Mimo']
    },
    {
        numero: 2,
        valor: 93.80,
        data: '20-02-2025',
        cliente: 'Maria',
        produtos: ['Gatinho', 'Cachorrinho Fofo']
    },
    {
        numero: 3,
        valor: 59.90,
        data: '10-03-2025',
        cliente: 'Carlos',
        produtos: ['Dinossaurinho']
    },
    {
        numero: 4,
        valor: 44.90,
        data: '15-03-2025',
        cliente: 'Ana',
        produtos: ['Gatinho']
    },
    {
        numero: 5,
        valor: 84.80,
        data: '05-04-2025',
        cliente: 'Lucas',
        produtos: ['Urso Caramelo Fofux', 'Coelhinha Rosa Mimo']
    },
];

  
app.get('/', (req, res) => {  
    res.render('index');  
});  

app.get('/clientes', (req, res) => {  
    res.render('clientes', { clientes });  
});  

app.get('/produtos', (req, res) => {  
    res.render('produtos', { produtos });  
});  

app.get('/pedidos', (req, res) => {  
    res.render('pedidos', { pedidos });  
});  
app.get('/pedidos/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);
    const pedido = pedidos.find(p => p.numero === numero);

    if (pedido) {
        res.render('detalhes', { pedido });
    } else {
        res.status(404).send('Pedido não encontrado');
    }
});
 
app.listen(port, () => {  
    console.log(`Servidor rodando em http://localhost:${port}`);  
});