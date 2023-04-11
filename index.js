require("dotenv").config();

const express = require("express");

const connection = require("./src/connection/connection");

const app = express();
connection.sync({ alter: true });

app.use(express.json());


app.listen(process.env.PORT_URL, () => console.log("server on"));
