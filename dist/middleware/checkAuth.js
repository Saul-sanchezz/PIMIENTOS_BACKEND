"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _Usuario = _interopRequireDefault(require("../models/Usuario.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const checkAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = _jsonwebtoken.default.verify(token, process.env.JWT_SECRET);
      req.usuario = await _Usuario.default.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v");
      return next();
    } catch (error) {
      return res.status(404).json({
        msj: "Hubo un error"
      });
    }
  }
  if (!token) {
    const error = new Error("Token no valido");
    return res.status(401).json({
      msj: error.message
    });
  }
  next();
};
var _default = exports.default = checkAuth;