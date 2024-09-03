const express = require('express');
const { getPagos, postPagos, updatePago } = require('../controllers/pagos');
const RUTAS_PAGOS = express.Router();

RUTAS_PAGOS
  .route('/')
  .get(getPagos)
  .post(postPagos)
  .put(updatePago)

module.exports = RUTAS_PAGOS;
