const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection/connection");

const Doctor = connection.define("doctor", {
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
  crm: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.ENUM,
    values: [
      "Clínico_Geral",
      "Anestesista",
      "Dermatologia",
      "Ginecologia",
      "Neurologia",
      "Pediatria",
      "Psiquiatria",
      "Ortopedia",
    ],
    allowNull: false,
  },
  system_status: DataTypes.ENUM("active", "inactive"),
});

module.exports = Doctor;
