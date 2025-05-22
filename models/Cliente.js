import { DataTypes } from "sequelize";
import connection from "../config/sequelize-config.js";

const Cliente = connection.define("clientes", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Cliente.sync({ force: false }); 
export default Cliente;