const MDB_STUDENTS = require('../database/schemas/alumnos');

const obtenerAlumnos = async (req,res) => {
  const response = await MDB_STUDENTS.find();
  res.send(response);
}

const crearAlumno = async (req,res) => {
  const response = await MDB_STUDENTS.create(req.body);
  res.status(200).send(response);
}

const eliminarAlumno = async (req,res) => {
  try {
    const { id } = req.params;
    const response = await MDB_STUDENTS.findByIdAndDelete(id);
    res.send({ status:'OK', response });
  } catch (error) {
    res.status(500).send({ status:'Error', error })
  }
}

module.exports = {
  obtenerAlumnos,
  crearAlumno,
  eliminarAlumno
}
