const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./routes.js');

mongoose.connect("mongodb://localhost:27017/tienda", { useNewUrlParser: true })
.then( db => console.log("Conexión a BD correcta") )
.catch( error => console.log("Error al conectarse a la BD" + error));

const app = express();

app.listen(3000, () => console.log("Servidor iniciado..."));
app.use('/api', apiRoutes);
app.use(express.json);