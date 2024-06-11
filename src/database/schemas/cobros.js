const mongoose = require('mongoose');

const CobrosSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  monto: Number
});

module.exports = mongoose.model("Cobros", CobrosSchema);
