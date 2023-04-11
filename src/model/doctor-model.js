const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection/db.js");

const Doctor = connection.define("doctor", {
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
