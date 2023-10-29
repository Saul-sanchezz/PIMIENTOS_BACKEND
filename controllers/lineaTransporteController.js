"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarLineaTransporte = exports.obtenerLineaTransportes = exports.obtenerLineaTransporte = exports.eliminarLineaTransporte = exports.editarLineaTransporte = void 0;
var _LineaTransporte = _interopRequireDefault(require("../models/LineaTransporte.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarLineaTransporte = async (req, res) => {
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
    const nombreExite = await _LineaTransporte.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Linea de Transporte ya se encuentra almacenada");
      return res.status(400).json({
        msg: error.message
      });
    }
    const lineaTransporte = new _LineaTransporte.default(req.body);
    const lineaTransporteAlmacenada = await lineaTransporte.save();
    return res.json(lineaTransporteAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarLineaTransporte = registrarLineaTransporte;
const obtenerLineaTransportes = async (req, res) => {
  try {
    const lineaTransportes = await _LineaTransporte.default.find();
    if (lineaTransportes.length === 0) {
      const error = new Error("No hay Lineas de transportes por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(lineaTransportes);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerLineaTransportes = obtenerLineaTransportes;
const obtenerLineaTransporte = async (req, res) => {
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
    const lineaTransporte = await _LineaTransporte.default.findById(id);
    if (!lineaTransporte) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(lineaTransporte);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerLineaTransporte = obtenerLineaTransporte;
const editarLineaTransporte = async (req, res) => {
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
    const nombreExite = await _LineaTransporte.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Linea de Transporte ya se encuentra almacenada");
      return res.status(400).json({
        msg: error.message
      });
    }
    const lineaTransporte = await _LineaTransporte.default.findById(id);
    if (!lineaTransporte) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    lineaTransporte.nombre = req.body.nombre || lineaTransporte.nombre;
    const lineaTranporteAlmacenada = await lineaTransporte.save();
    res.json(lineaTranporteAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarLineaTransporte = editarLineaTransporte;
const eliminarLineaTransporte = async (req, res) => {
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
    const lineaTransporte = await _LineaTransporte.default.findById(id);
    if (!lineaTransporte) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const lineaTransporteEliminar = await lineaTransporte.deleteOne(lineaTransporte);
    return res.json(lineaTransporteEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarLineaTransporte = eliminarLineaTransporte;