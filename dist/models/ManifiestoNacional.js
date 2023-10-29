"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NacionalManifiestoSchema = _mongoose.default.Schema({
  cajas: {
    type: Number,
    require: true,
    trim: true
  },
  cantidadPallets: {
    type: Number,
    require: true,
    trim: true
  },
  celular: {
    type: Number,
    trim: true
  },
  cliente: {
    type: String,
    require: true,
    trim: true
  },
  cultivo: {
    type: String,
    require: true,
    trim: true
  },
  detallesPrecios: [{
    cantidadPrecio: {
      type: Number,
      require: true,
      trim: true
    },
    cultivoPrecio: {
      type: String,
      require: true,
      trim: true
    },
    precio: {
      type: Number,
      require: true,
      trim: true
    }
  }],
  fletera: {
    type: String,
    require: true,
    trim: true
  },
  horaSalida: {
    type: Date
  },
  marcaTrailer: {
    type: String,
    require: true,
    trim: true
  },
  nombreChofer: {
    type: String,
    require: true,
    trim: true
  },
  nroEconomico: {
    type: String,
    require: true,
    trim: true
  },
  nroFactura: {
    type: Number,
    require: true,
    trim: true
  },
  pallets: {
    type: String,
    require: true,
    trim: true
  },
  placasCaja: {
    type: String,
    require: true,
    trim: true
  },
  placasTrailer: {
    type: String,
    require: true,
    trim: true
  },
  sellos: {
    type: String,
    trim: true
  },
  termografo: {
    type: String,
    trim: true
  },
  horaSalida: {
    type: String
  },
  fechaEmbarque: {
    type: Date,
    default: Date.now
  },
  nombreEmpresa: {
    type: String,
    require: true,
    trim: true
  }
}, {
  timestamps: true
});
const NacionalManifiesto = _mongoose.default.model("NacionalManifiesto", NacionalManifiestoSchema);
var _default = exports.default = NacionalManifiesto;