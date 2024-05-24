const express = require('express');
const RUTAS_ALUMNOS = express.Router();
const { obtenerAlumnos, crearAlumno } = require('../controllers/alumnos');

RUTAS_ALUMNOS.route('/')
  .get(obtenerAlumnos)
  .post(crearAlumno)


module.exports = RUTAS_ALUMNOS;
