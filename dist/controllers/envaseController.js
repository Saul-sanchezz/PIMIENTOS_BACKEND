"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarEnvase = exports.obtenerEnvases = exports.obtenerEnvase = exports.eliminarEnvase = exports.editarEnvase = void 0;
var _Envase = _interopRequireDefault(require("../models/Envase.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarEnvase = async (req, res) => {
  const {
    nombre
  } = req.body;
  if (nombre === "") {
    const error = new Error("Campo obligatorio");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const nombreExite = await _Envase.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Envase ya se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const envase = new _Envase.default(req.body);
    const envaseAlmacenado = await envase.save();
    return res.json(envaseAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarEnvase = registrarEnvase;
const obtenerEnvases = async (req, res) => {
  try {
    const envases = await _Envase.default.find();
    if (envases.length === 0) {
      const error = new Error("No hay envases por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(envases);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerEnvases = obtenerEnvases;
const obtenerEnvase = async (req, res) => {
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
    const envase = await _Envase.default.findById(id);
    if (!envase) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(envase);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerEnvase = obtenerEnvase;
const editarEnvase = async (req, res) => {
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
    const nombreExite = await _Envase.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Envase ya se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const envase = await _Envase.default.findById(id);
    if (!envase) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    envase.nombre = req.body.nombre || envase.nombre;
    const envaseAlmacenado = await envase.save();
    return res.json(envaseAlmacenado);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarEnvase = editarEnvase;
const eliminarEnvase = async (req, res) => {
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
    const envase = await _Envase.default.findById(id);
    if (!envase) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const envaseEliminar = await envase.deleteOne(envase);
    return res.json(envaseEliminar);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarEnvase = eliminarEnvase;