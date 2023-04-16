const express = require("express");

const addPatient = require("../controller/patient-controller/add-patient");
const deletePatient = require("../controller/patient-controller/delete-patient");
const updatePatient = require("../controller/patient-controller/update-patient");
const findOnePatient = require("../controller/patient-controller/findOne-patient");
const findAllPatient = require("../controller/patient-controller/findAll-patient");
const statusPatient = require("../controller/patient-controller/status-patient");

const patientSecure = require("../middlewares/patient-middleware");

const route = express.Router();

route.post("/api/paciente", patientSecure, addPatient);
route.get("/api/paciente/:id", findOnePatient);
route.get("/api/paciente", findAllPatient);
route.put("/api/paciente/:id/status", statusPatient);
route.put("/api/paciente/:id", patientSecure, updatePatient);
route.delete("/api/paciente/:id", deletePatient);

module.exports = route;
