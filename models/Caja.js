"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CajaSchema = _mongoose.default.Schema({
  numeroEconomico: {
    type: String,
    require: true,
    trim: true,
    uppercase: true
  },
  placas: {
    type: String,
    require: true,
    trim: true,
    uppercase: true
  }
}, {
  timestamps: true
});
const Caja = _mongoose.default.model("Caja", CajaSchema);
var _default = exports.default = Caja;