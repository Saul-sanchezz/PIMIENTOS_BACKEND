const mongoose = require("mongoose");

const TamanoSchema = mongoose.Schema({
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

const Tamano = mongoose.model("Tamano", TamanoSchema)

module.exports = Tamano