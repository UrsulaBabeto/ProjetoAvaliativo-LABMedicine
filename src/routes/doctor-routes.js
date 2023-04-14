const express = require("express");
const addDoctor = require("../controller/doctor-controller/add-doctor");
const updateDoctor = require("../controller/doctor-controller/update-doctor");
const deleteDoctor = require("../controller/doctor-controller/delete-doctor");
const findOneDoctor = require("../controller/doctor-controller/findOne-doctor");
const statusDoctor = require("../controller/doctor-controller/status-doctor");
const findAllDoctors = require("../controller/doctor-controller/findAll-doctor");

const doctorSecure = require("../middlewares/doctor-middleware/doctor-middleware");
const doctorUpdateSecure = require("../middlewares/doctor-middleware/doctor-update-middleware");
const doctorStatusSecure = require("../middlewares/doctor-middleware/doctor-status-middleware");


const route = express.Router();

route.post("/api/medico", doctorSecure, addDoctor);
route.delete("/api/medico/:id", deleteDoctor);
route.put("/api/medico/:id", doctorUpdateSecure, updateDoctor);
route.put("/api/medico/:id/status",doctorStatusSecure, statusDoctor);
route.get("/api/medico/:id", findOneDoctor);
route.get("/api/medico", findAllDoctors);

module.exports = route;
