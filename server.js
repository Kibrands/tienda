const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./routes');

mongoose.connect("mongodb://localhost:27017/tienda", { useNewUrlParser: true })
.then( db => console.log("Conexión a BD correcta") )
.catch( error => console.log("Error al conectarse a la BD" + error));

const app = express();

app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);


app.get("/",(req, res)=> { 
    res.send("<h1>Hola Mundo</h1>") 
});


app.get("/hola",(req, res) => 
res.send("hola hola")
);

app.listen(3000, () => console.log("Servidor iniciado..."));
