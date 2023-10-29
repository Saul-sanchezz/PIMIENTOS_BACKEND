"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MarcaSchema = _mongoose.default.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
    uppercase: true
  }
}, {
  timestamps: true
});
const Marca = _mongoose.default.model("Marca", MarcaSchema);
var _default = exports.default = Marca;