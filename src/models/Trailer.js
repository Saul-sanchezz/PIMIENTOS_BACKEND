const mongoose = require("mongoose");

const TrailerSchema = mongoose.Schema({
    numeroEconomico: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    placas: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    marca: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    modelo: {
      type: Number,
      require: true,
    }
  }, 
  {
    timestamps: true
  },
)

const Trailer = mongoose.model("Trailer", TrailerSchema)

module.exports = Trailer