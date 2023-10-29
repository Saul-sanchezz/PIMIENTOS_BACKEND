import mongoose from "mongoose";

const PalletSchema = mongoose.Schema({
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
  cantidad: {
    type: Number,
    require: true,
    default: 1
  },
  creado: {
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

const Pallet = mongoose.model("Pallet", PalletSchema)

export default Pallet