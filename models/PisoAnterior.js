import mongoose from "mongoose";

const PisoAnteriorSchema = mongoose.Schema({
    cantidadCajas: {
      type: Number,
      require: true,
    },
    cultivo: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    tamano: {
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
    envase: {
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

const PisoAnterior = mongoose.model("PisoAnterior", PisoAnteriorSchema)

export default PisoAnterior