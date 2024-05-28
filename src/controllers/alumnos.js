const MDB_STUDENTS = require('../database/schemas/alumnos');

const obtenerAlumnos = async (req,res) => {
  const response = await MDB_STUDENTS.find();
  res.send(response);
}

const crearAlumno = async (req,res) => {

  const response = await MDB_STUDENTS.create(req.body);

  res.status(200).send(response);
}

module.exports = {
  obtenerAlumnos,
  crearAlumno
}
