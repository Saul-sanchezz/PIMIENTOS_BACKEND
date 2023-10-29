"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EmpresaSchema = _mongoose.default.Schema({
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
    enum: ["Embarcador", "Distribuidor", "AgenciaAduanal"]
  }
}, {
  timestamps: true
});
const Empresa = _mongoose.default.model("Empresa", EmpresaSchema);
var _default = exports.default = Empresa;