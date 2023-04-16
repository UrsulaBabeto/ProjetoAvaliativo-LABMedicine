const express = require("express");

const addNurse = require("../controller/nurse-controller/add-nurse");
const updateNurse = require("../controller/nurse-controller/update-nurse");
const deleteNurse = require("../controller/nurse-controller/delete-nurse");
const findOneNurse = require("../controller/nurse-controller/findOne-nurse");
const findAllNurse = require("../controller/nurse-controller/findAll-nurse");

const nurseSecure = require("../middlewares/nurse-middleware");

const route = express.Router();

route.post("/api/enfermeira", nurseSecure, addNurse);
route.delete("/api/enfermeira", deleteNurse);
route.put("/api/enfermeira/:id", nurseSecure, updateNurse);
route.get("/api/enfermeira/:id", findOneNurse);
route.get("/api/enfermeira", findAllNurse);

module.exports = route;
