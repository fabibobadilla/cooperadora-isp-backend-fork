const express = require('express');
const { obtenerCobros, crearCobro } = require('../controllers/cobros');

const RUTA_COBROS = express.Router();

RUTA_COBROS
  .route('/')
  .get(obtenerCobros)
  .post(crearCobro)


module.exports = RUTA_COBROS;
