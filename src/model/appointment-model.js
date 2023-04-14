const { Sequelize } = require("sequelize");
const connection = require("../connection/connection");
const Doctor = require("./doctor-model");
const Patient = require("./patient-model");

const Appointment = connection.define("appointment", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});
Appointment.belongsTo(Doctor);
Appointment.belongsTo(Patient);

module.exports = Appointment;
