const mongoose = require("mongoose");

const CultivoSchema = mongoose.Schema({
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

const Cultivo = mongoose.model("Cultivo", CultivoSchema)

module.exports = Cultivo