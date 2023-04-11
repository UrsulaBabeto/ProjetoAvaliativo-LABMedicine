const { Sequelize } = require("sequelize");
const connection = require("../connection/connection");

const Nurse = connection.define("nurse", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: Sequelize.STRING,
  gender: Sequelize.STRING,
  birth_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
  },
  phone_number: Sequelize.STRING,
  college: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cofen_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Nurse;
