const express = require('express');
const addDoctor = require('../controller/doctor-controller/add-doctor');
const updateDoctor = require('../controller/doctor-controller/update-doctor');
const deleteDoctor = require('../controller/doctor-controller/delete-doctor');
const findDoctor = require('../controller/doctor-controller/find-doctor');

const route = express.Router(); 

route.post('/api/doctor',addDoctor);
route.delete('/api/doctor',deleteDoctor);
route.delete('/api/doctor',updateDoctor);
route.delete('/api/doctor',findDoctor);

module.exports = route;