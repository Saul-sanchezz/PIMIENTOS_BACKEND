const mongoose = require("mongoose");

const ExpoManifiestoSchema = mongoose.Schema({
  nroManifiesto: {
    type: String,
    require: true,
    trim: true,
  },
  nroPallets: {
    type: Number,
    require: true,
  },
  fechaEmbarque: {
    type: Date,
    require: true,
  },
  agregadoReporte: {
    type: Boolean,
    default: false,
  },
  agenciaMx: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empresa",
  },
  agenciaUsa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empresa",
  },
  agenciaDestino: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empresa",
  },
  nombreEmpaque: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empresa",
  },
  chofer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chofer",
  },
  trailer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trailer",
  },
  caja: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Caja",
  },
  lineaTransporte: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LineaTransporte",
  },
  listaProductos: [{
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
    id: {
      type: String,
      require: true,
      trim: true,
    },
  }],
},
  {
    timestamps: true
  },
)

const ExpoManifiesto = mongoose.model("ExpoManifiesto", ExpoManifiestoSchema)

module.exports = ExpoManifiesto