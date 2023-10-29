"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarChofer = exports.obtenerChoferes = exports.obtenerChofer = exports.eliminarChofer = exports.editarChofer = void 0;
var _Chofer = _interopRequireDefault(require("../models/Chofer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarChofer = async (req, res) => {
  const {
    nombre,
    licencia
  } = req.body;
  if ([nombre, licencia].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const nombreExite = await _Chofer.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Chofer ya se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const chofer = new _Chofer.default(req.body);
    const choferAlmacenado = await chofer.save();
    return res.json(choferAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarChofer = registrarChofer;
const obtenerChoferes = async (req, res) => {
  try {
    const choferes = await _Chofer.default.find();
    if (choferes.length === 0) {
      const error = new Error("No hay Choferes por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(choferes);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerChoferes = obtenerChoferes;
const obtenerChofer = async (req, res) => {
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
    const chofer = await _Chofer.default.findById(id);
    if (!chofer) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(chofer);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerChofer = obtenerChofer;
const editarChofer = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    nombre,
    licencia
  } = req.body;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  if ([nombre, licencia].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    // const nombreExite = await Chofer.findOne({ nombre })

    // if (nombreExite) {
    //   const error = new Error("Chofer ya se encuentra almacenado")
    //   return res.status(400).json({ msg: error.message })
    // }

    const chofer = await _Chofer.default.findById(id);
    if (!chofer) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    chofer.nombre = req.body.nombre || chofer.nombre;
    chofer.licencia = req.body.licencia || chofer.licencia;
    const choferAlmacenado = await chofer.save();
    return res.json(choferAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarChofer = editarChofer;
const eliminarChofer = async (req, res) => {
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
    const chofer = await _Chofer.default.findById(id);
    if (!chofer) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const choferEliminar = await chofer.deleteOne(chofer);
    return res.json(choferEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarChofer = eliminarChofer;