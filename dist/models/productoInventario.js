"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productoInventarioSchema = _mongoose.default.Schema({
  nombre: {
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
  cantidad: {
    type: Number,
    require: true,
    default: 0
  }
}, {
  timestamps: true
});
const ProductoInventario = _mongoose.default.model("ProductoInventario", productoInventarioSchema);
var _default = exports.default = ProductoInventario;