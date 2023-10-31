const mongoose = require("mongoose");

const MarcaSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
  }, 
  {
    timestamps: true
  },
)

const Marca = mongoose.model("Marca", MarcaSchema)

module.exports = Marca