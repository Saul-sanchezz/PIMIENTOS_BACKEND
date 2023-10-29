"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ExpoManifiestoSchema = _mongoose.default.Schema({
  nroManifiesto: {
    type: String,
    require: true,
    trim: true
  },
  nroPallets: {
    type: Number,
    require: true
  },
  fechaEmbarque: {
    type: Date,
    require: true
  },
  agregadoReporte: {
    type: Boolean,
    default: false
  },
  agenciaMx: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Empresa"
  },
  agenciaUsa: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Empresa"
  },
  agenciaDestino: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Empresa"
  },
  nombreEmpaque: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Empresa"
  },
  chofer: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Chofer"
  },
  trailer: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Trailer"
  },
  caja: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Caja"
  },
  lineaTransporte: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "LineaTransporte"
  },
  listaProductos: [{
    cantidadCajas: {
      type: Number,
      require: true
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
      trim: true
    }
  }]
}, {
  timestamps: true
});
const ExpoManifiesto = _mongoose.default.model("ExpoManifiesto", ExpoManifiestoSchema);
var _default = exports.default = ExpoManifiesto;