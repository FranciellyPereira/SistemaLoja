const produtos = [
    { nome: 'Urso Caramelo Fofux', preco: 39.90, categoria: 'Ursinhos', imagem: 'Urso.png' },
    { nome: 'Gatinho', preco: 44.90, categoria: 'Gatinhos', imagem: 'Gatinho.png' },
    { nome: 'Cachorrinho Fofo', preco: 49.90, categoria: 'Cãezinhos', imagem: 'Cachorro.png' },
    { nome: 'Coelhinha Rosa Mimo', preco: 34.90, categoria: 'Coelhinhos', imagem: 'Coelhinha.png' },
    { nome: 'Dinossaurinho', preco: 59.90, categoria: 'Dinos', imagem: 'Dinossauro.png' },
];

exports.listarProdutos = (req, res) => {
    res.render('produtos', { produtos });
};