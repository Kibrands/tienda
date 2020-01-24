const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js');

mongoose.connect("mongodb+srv://julio:julio@cluster0-pdbce.mongodb.net/tienda?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch(error => console.log("Error al conectarse a la BD" + error));

const app = express();

app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado..."));
