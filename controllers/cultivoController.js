"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarCultivo = exports.obtenerCultivos = exports.obtenerCultivo = exports.eliminarCultivo = exports.editarCultivo = void 0;
var _Cultivo = _interopRequireDefault(require("../models/Cultivo.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarCultivo = async (req, res) => {
  const {
    nombre
  } = req.body;
  if (nombre === "") {
    const error = new Error("Campo obligatorio");
    return res.status(400).json({
      msg: error.message
    });
  }
  const nombreExite = await _Cultivo.default.findOne({
    nombre
  });
  if (nombreExite) {
    const error = new Error("Cultivo ya se encuentra almacenado");
    return res.status(400).json({
      msg: error.message
    });
  }
  const cultivo = new _Cultivo.default(req.body);
  try {
    const cultivoAlmacenado = await cultivo.save();
    return res.json(cultivoAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarCultivo = registrarCultivo;
const obtenerCultivos = async (req, res) => {
  try {
    const cultivos = await _Cultivo.default.find();
    if (cultivos.length === 0) {
      const error = new Error("No hay Cultivos por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(cultivos);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerCultivos = obtenerCultivos;
const obtenerCultivo = async (req, res) => {
  const {
    id
  } = req.params;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  try {
    const cultivo = await _Cultivo.default.findById(id);
    if (!cultivo) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(cultivo);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerCultivo = obtenerCultivo;
const editarCultivo = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    nombre
  } = req.body;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  if (nombre === "") {
    const error = new Error("Campo obligatorio");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const nombreExite = await _Cultivo.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Cultivo ya se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const cultivo = await _Cultivo.default.findById(id);
    if (!cultivo) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    cultivo.nombre = req.body.nombre || cultivo.nombre;
    const cultivoAlmacenado = await cultivo.save();
    return res.json(cultivoAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarCultivo = editarCultivo;
const eliminarCultivo = async (req, res) => {
  const {
    id
  } = req.params;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  try {
    const cultivo = await _Cultivo.default.findById(id);
    if (!cultivo) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const cultivoEliminar = await cultivo.deleteOne(cultivo);
    return res.json(cultivoEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarCultivo = eliminarCultivo;