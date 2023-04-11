const { Sequelize } = require("sequelize");
const connection = require("../connection/connection");

const Patient = Sequelize.afterDefine("patient", {
  emergency_phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  allergies: Sequelize.STRING,
  special_care: Sequelize.STRING,
  health_insurance: Sequelize.STRING,
  status: {
    type: DataTypes.ENUM,
    values: ["waiting", "in_care", "taken_care", "no_care"],
  },
});

module.exports = Patient;

/* 
Total de atendimentos realizados.
Este item é um contador que inicia em zero. Sempre que um médico realiza um atendimento este valor deve ser incrementado. */
