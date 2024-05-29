const express = require('express');
const RUTAS_ALUMNOS = express.Router();
const { obtenerAlumnos, crearAlumno, eliminarAlumno } = require('../controllers/alumnos');

RUTAS_ALUMNOS.route('/')
  .get(obtenerAlumnos)
  .post(crearAlumno)

RUTAS_ALUMNOS.route('/:id')
  .delete(eliminarAlumno)



module.exports = RUTAS_ALUMNOS;
