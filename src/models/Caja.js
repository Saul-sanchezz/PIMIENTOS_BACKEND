import mongoose from "mongoose";

const CajaSchema = mongoose.Schema({
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
    }
  }, 
  {
    timestamps: true
  },
)

const Caja = mongoose.model("Caja", CajaSchema)

export default Caja