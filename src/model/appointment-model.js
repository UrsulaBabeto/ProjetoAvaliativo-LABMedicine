const { Sequelize } = require("sequelize");
const connection = require("../connection/connection");

const Appointment = connection.define(
  "appointments",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },    
  },
  { timestamps: false }
);

module.exports = Appointment;
