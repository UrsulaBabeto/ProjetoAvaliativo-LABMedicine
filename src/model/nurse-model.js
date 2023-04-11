const { Sequelize } = require("sequelize");
const connection = require("../connection/db.js");

const Nurse = connection.define("nurse", {
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
