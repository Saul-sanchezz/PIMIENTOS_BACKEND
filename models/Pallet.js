"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PalletSchema = _mongoose.default.Schema({
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
  cantidad: {
    type: Number,
    require: true,
    default: 1
  },
  creado: {
    type: String,
    require: true,
    trim: true,
    uppercase: true
  }
}, {
  timestamps: true
});
const Pallet = _mongoose.default.model("Pallet", PalletSchema);
var _default = exports.default = Pallet;