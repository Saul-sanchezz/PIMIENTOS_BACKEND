const mongoose = require("mongoose");

const ReporteSchema = mongoose.Schema({
  datosCalculoEmpaqueTotal: [{
    acomuladoCorte: {
      type: Number,
      require: true,
    },
    acomuladoCorteAnterior: {
      type: Number,
      require: true,
    },
    acomuladoEmpaque: {
      type: Number,
      require: true,
    },
    acomuladoEmpaqueAnterior: {
      type: Number,
      require: true,
    },
    corte: {
      type: Number,
      require: true,
    },
    cultivo: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    porcentageEmpaque: {
      type: Number,
      require: true,
    },
    rendimientoEmpaque: {
      type: Number,
      require: true,
    },
    totalEmpacado: {
      type: Number,
      require: true,
    }
  }],
  totalDeEmpaque: [{
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
    envase: {
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
    tamano: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    }
  }],
  totalDeEmpaquePorProducto: [{
    cajas: {
      type: Number,
      require: true,
    },
    cultivo: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
  }],
  pisoActual: [{
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
  }],
  fecha: {
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

const EmpaqueReporte = mongoose.model("EmpaqueReporte", ReporteSchema)

module.exports = EmpaqueReporte