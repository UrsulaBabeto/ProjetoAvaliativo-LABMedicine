const express = require('express');

const addNurse = require('../controller/nurse-controller/add-nurse');
const updateNurse = require('../controller/nurse-controller/update-nurse');
const deleteNurse = require('../controller/nurse-controller/delete-nurse');
const findNurse = require('../controller/nurse-controller/find-nurse');

const route = express.Router(); 

route.post('/api/nurse',addNurse);
route.delete('/api/nurse',deleteNurse);
route.put('/api/nurse',updateNurse);
route.get('/api/nurse',findNurse);

module.exports = route;