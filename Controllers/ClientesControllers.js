// Clientes Controllers
import Cliente from "../models/Cliente.js";

// LISTAR todos os clientes
export function listarClientes(req, res) {
  Cliente.findAll()
    .then(clientes => {
      res.render("clientes", { clientes });
    })
    .catch(error => {
      console.error("Erro ao listar clientes:", error);
      res.status(500).send("Erro ao buscar clientes");
    });
}

// CADASTRAR novo cliente
export function cadastrarCliente(req, res) {
  const { nome, cpf, endereco } = req.body;
  Cliente.create({ nome, cpf, endereco })
    .then(() => res.redirect("/clientes"))
    .catch(error => {
      console.error("Erro ao cadastrar cliente:", error);
      res.status(500).send("Erro ao cadastrar cliente");
    });
}

// EXCLUIR cliente
export function excluirCliente(req, res) {
  const { id } = req.params;
  Cliente.destroy({ where: { id } })
    .then(() => res.redirect("/clientes"))
    .catch(error => {
      console.error("Erro ao excluir cliente:", error);
      res.status(500).send("Erro ao excluir cliente");
    });
}

// MOSTRAR formulário de edição
export function mostrarEdicao(req, res) {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    return res.redirect("/clientes");
  }

  Cliente.findByPk(id)
    .then(cliente => {
      if (cliente) {
        res.render("clientesEdit", { cliente });
      } else {
        res.redirect("/clientes");
      }
    })
    .catch(error => {
      console.error("Erro ao buscar cliente para edição:", error);
      res.status(500).send("Erro ao carregar cliente");
    });
}

// ATUALIZAR cliente
export function atualizarCliente(req, res) {
  const { id, nome, cpf, endereco } = req.body;
  Cliente.update(
    { nome, cpf, endereco },
    { where: { id } }
  )
    .then(() => res.redirect("/clientes"))
    .catch(error => {
      console.error("Erro ao atualizar cliente:", error);
      res.status(500).send("Erro ao atualizar cliente");
    });
}
