const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION);
    console.log('Base de datos online 🟢');
  } catch (error) {
    console.log('Error al conectar la Base de Datos 🔴');
    console.log(error);
  }
};
