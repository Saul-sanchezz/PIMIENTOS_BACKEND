import mongoose from "mongoose";

const EmpresaSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    direccion: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    ciudad: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    rfc: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    tipo: {
      type: String,
      required: true,
      enum: ["Embarcador", "Distribuidor", "AgenciaAduanal"],
    },
  }, 
  {
    timestamps: true
  },
)

const Empresa = mongoose.model("Empresa", EmpresaSchema)

export default Empresa

