"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TrailerSchema = _mongoose.default.Schema({
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
  },
  marca: {
    type: String,
    require: true,
    trim: true,
    uppercase: true
  },
  modelo: {
    type: Number,
    require: true
  }
}, {
  timestamps: true
});
const Trailer = _mongoose.default.model("Trailer", TrailerSchema);
var _default = exports.default = Trailer;