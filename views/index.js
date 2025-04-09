const express = require('express');  
const path = require('path');  
 
const app = express();  
const port = 3000; 
 
app.set('view engine', 'ejs');  


app.set('views', path.join(__dirname, 'views'));  
 
app.use(express.static(path.join(__dirname, 'public')));  


const clientes = [  
    { nome: 'João ', cpf: '123.456.789-00', endereco: 'Rua A, 123', telefone: '99999-0001', email: 'joao@example.com' },  
    { nome: 'Maria Oliveira', cpf: '987.654.321-00', endereco: 'Rua B, 456', telefone: '88888-0002', email: 'maria@example.com' },  
];  

const produtos = [  
    { nome: 'Produto 1', preco: 39.99, categoria: 'Categoria A' },  
    { nome: 'Produto 2', preco: 49.99, categoria: 'Categoria B' }
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
    res.render('pedidos')
});  

app.listen(port, () => {  
    console.log(`Servidor rodando em http://localhost:${port}`); 
});