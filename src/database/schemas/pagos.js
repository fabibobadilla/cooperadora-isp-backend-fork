const mongoose = require('mongoose');

const pagosSchema = new mongoose.Schema({
  alumno_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumnos' },
  cobro_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cobros' },
  fechaCreacion: Date,
  pagado: Boolean
});

module.exports = mongoose.model('Pagos', pagosSchema);
