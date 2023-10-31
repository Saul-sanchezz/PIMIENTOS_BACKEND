const mongoose = require("mongoose");

const ChoferSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    licencia: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    }
  }, 
  {
    timestamps: true
  },
)

const Chofer = mongoose.model("Chofer", ChoferSchema)

module.exports = Chofer