const express = require('express');
const { obtenerCobros, crearCobro, eliminarCobro } = require('../controllers/cobros');

const RUTA_COBROS = express.Router();

RUTA_COBROS
  .route('/')
  .get(obtenerCobros)
  .post(crearCobro)

RUTA_COBROS
  .route('/:id')
  .delete(eliminarCobro)


module.exports = RUTA_COBROS;
