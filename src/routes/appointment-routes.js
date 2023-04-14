const express = require('express');
const appointment = require('../controller/appointment-controller/appointment-pacient-doctor');

const route = express.Router();

route.put("/api/appointment",  appointment);

module.exports = route;