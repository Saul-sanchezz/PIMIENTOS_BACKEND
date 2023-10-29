// import mongoose from "mongoose";
const mongoose = require("mongoose");

const option = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, option)
    const url = `${connection.connection.host}:${connection.connection.port}`
    console.log(`mongoDB conectado en: ${url}`)
  } catch (error) {
    process.exit(1)
  }
}

module.exports = conectarDB
