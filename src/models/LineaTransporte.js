const mongoose = require("mongoose");

const LineaTransporteSchema = mongoose.Schema({
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

const LineaTransporte = mongoose.model("LineaTransporte", LineaTransporteSchema)

module.exports = LineaTransporte