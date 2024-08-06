const express = require('express');
const { getPagos, postPagos } = require('../controllers/pagos');
const RUTAS_PAGOS = express.Router();

RUTAS_PAGOS
  .route('/')
  .get(getPagos)
  .post(postPagos)

module.exports = RUTAS_PAGOS;
