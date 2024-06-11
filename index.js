// Importacion de librerias
require('dotenv').config();
const express = require('express');

// Importacion de archivos propios (controllers, routes, etc...)
const dbConnect = require('./src/database/connection');
const RUTAS_ALUMNOS = require('./src/routes/alumnos');
const RUTAS_COBROS = require('./src/routes/cobros');

// Instanciación de EXPRESS (servidor)
const app = express();

// Declaraciones del servidor (rutas que se usan, middlewares, etc...)
app.use(express.json());
app.use('/alumnos', RUTAS_ALUMNOS);
app.use('/cobros', RUTAS_COBROS);

// Inicialización del servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en puerto ${process.env.PORT}`)
  dbConnect(); // Recién ahi conecto la DB
});
