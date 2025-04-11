const clientes = [
    { nome: 'João', cpf: '123.456.789-00', endereco: 'Rua A, 123', telefone: '99999-0001', email: 'joao@example.com' },
    { nome: 'Maria', cpf: '987.654.321-00', endereco: 'Rua B, 456', telefone: '99999-0002', email: 'maria@example.com' },
    { nome: 'Carlos', cpf: '111.222.333-44', endereco: 'Rua C, 789', telefone: '99999-0003', email: 'carlos@example.com' },
    { nome: 'Ana', cpf: '444.555.666-77', endereco: 'Rua D, 321', telefone: '99999-0004', email: 'ana@example.com' },
    { nome: 'Lucas', cpf: '555.444.333-22', endereco: 'Rua E, 654', telefone: '99999-0005', email: 'lucas@example.com' },
];

exports.listarClientes = (req, res) => {
    res.render('clientes', { clientes });
};
