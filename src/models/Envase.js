import mongoose from "mongoose";

const EnvaseSchema = mongoose.Schema({
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

const Envase = mongoose.model("Envase", EnvaseSchema)

export default Envase