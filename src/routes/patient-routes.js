const express = require('express');
const addPatient = require('../controller/patient-controller/add-patient');
const deletePatient = require('../controller/patient-controller/delete-patient');
const updatePatient = require('../controller/patient-controller/update-patient');
const findPatient = require('../controller/patient-controller/find-patient');
const listPatient = require('../controller/patient-controller/list-patients');
const statusPatient = require('../controller/patient-controller/status-patient');


const route = express.Router(); 


route.post('/api/pacient',addPatient);
route.get('/api/pacient/:id',findPatient);
route.get('/api/pacient',listPatient);
route.put('/api/pacient/:id/status',statusPatient);
route.put('/api/pacientes/:id',updatePatient);
route.delete('/api/pacient/:id',deletePatient);

module.exports = route;