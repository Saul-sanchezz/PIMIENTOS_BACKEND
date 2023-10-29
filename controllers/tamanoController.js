"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarTamano = exports.obtenerTamanos = exports.obtenerTamano = exports.eliminarTamano = exports.editarTamano = void 0;
var _Tamano = _interopRequireDefault(require("../models/Tamano.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarTamano = async (req, res) => {
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
    const nombreExite = await _Tamano.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Tamaño ya se encuentra Almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const tamano = new _Tamano.default(req.body);
    const tamanoAlmacenado = await tamano.save();
    return res.json(tamanoAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarTamano = registrarTamano;
const obtenerTamanos = async (req, res) => {
  try {
    const tamanos = await _Tamano.default.find();
    if (tamanos.length === 0) {
      const error = new Error("No hay tamaños por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(tamanos);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerTamanos = obtenerTamanos;
const obtenerTamano = async (req, res) => {
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
    const tamano = await _Tamano.default.findById(id);
    if (!tamano) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(tamano);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerTamano = obtenerTamano;
const editarTamano = async (req, res) => {
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
    const nombreExite = await _Tamano.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Nombre de tamaño se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const tamano = await _Tamano.default.findById(id);
    if (!tamano) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    tamano.nombre = req.body.nombre || tamano.nombre;
    const tamanoAlmacenado = await tamano.save();
    return res.json(tamanoAlmacenado);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarTamano = editarTamano;
const eliminarTamano = async (req, res) => {
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
    const tamano = await _Tamano.default.findById(id);
    if (!tamano) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const tamanoEliminar = await tamano.deleteOne(tamano);
    return res.json(tamanoEliminar);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarTamano = eliminarTamano;