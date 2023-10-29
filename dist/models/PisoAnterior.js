"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PisoAnteriorSchema = _mongoose.default.Schema({
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
  }
}, {
  timestamps: true
});
const PisoAnterior = _mongoose.default.model("PisoAnterior", PisoAnteriorSchema);
var _default = exports.default = PisoAnterior;