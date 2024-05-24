const MDB_STUDENTS = require('../database/schemas/alumnos');

const obtenerAlumnos = async (req,res) => {
  const response = await MDB_STUDENTS.find();
  res.send(response);
}

const crearAlumno = async (req,res) => {
  const response = await MDB_STUDENTS.create({
    nombre: 'Agustin',
    apellido: 'Alesso',
    dni: 32621184,
    direccion: 'F. Angeloni 2578',
    telefono: '+5493498478398',
    email: 'agustinalesso23@gmail.com',
    fecha_nacimiento: new Date()
  })

  res.send(response);
}

module.exports = {
  obtenerAlumnos,
  crearAlumno
}
