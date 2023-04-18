const { Sequelize } = require("sequelize");
const connection = require("../connection/connection");
const Doctor = require("./doctor-model");
const Patient = require("./patient-model");

const Appointment = connection.define(
  "appointments",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    doctorId:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    patientId:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },  
  },
  { timestamps: false }
);

Appointment.hasOne(Patient, { foreignKey: 'patientId' });
Appointment.hasOne(Doctor, { foreignKey: 'doctorId' }); 

module.exports = Appointment;
