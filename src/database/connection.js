const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION);
    console.log('Database Connected 🟢');
  } catch (error) {
    console.log('Database connection error 🔴');
    console.log(error);
  }
};
