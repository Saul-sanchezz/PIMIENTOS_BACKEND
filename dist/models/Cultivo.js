"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CultivoSchema = _mongoose.default.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
    uppercase: true
  }
}, {
  timestamps: true
});
const Cultivo = _mongoose.default.model("Cultivo", CultivoSchema);
var _default = exports.default = Cultivo;