const MDB_COBROS = require('../database/schemas/cobros');

const crearCobro = async (req,res) => {
  const response = await MDB_COBROS.create(req.body);
  res.status(200).send(response);
};

const obtenerCobros = async (req,res) => {
  const response = await MDB_COBROS.find();
  res.send(response);
};

const modificarCobro = async (req,res) => {};
const eliminarCobro = async (req,res) => {};

module.exports = {
  crearCobro,
  modificarCobro,
  eliminarCobro,
  obtenerCobros
};
