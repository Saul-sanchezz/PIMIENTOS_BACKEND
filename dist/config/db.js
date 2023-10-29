"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const option = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const conectarDB = async () => {
  try {
    const connection = await _mongoose.default.connect(process.env.MONGO_URI, option);
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`mongoDB conectado en: ${url}`);
  } catch (error) {
    process.exit(1);
  }
};
var _default = exports.default = conectarDB;