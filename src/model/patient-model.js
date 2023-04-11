const { Sequelize } = require("sequelize");

const connection = require("../connection/connection");

const Patient = connection.define("patient", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
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
  emergency_phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  allergies: Sequelize.STRING,
  special_care: Sequelize.STRING,
  health_insurance: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM("waiting", "in_care", "taken_care", "no_care"),
  },
});

module.exports = Patient;

/* 
  Place.belongsTo(User,{foreignKey:'user_id'})
Total de atendimentos realizados.
Este item é um contador que inicia em zero. Sempre que um médico realiza um atendimento este valor deve ser incrementado. */
