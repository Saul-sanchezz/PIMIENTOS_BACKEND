"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarCaja = exports.obtenerCajas = exports.obtenerCaja = exports.eliminarCaja = exports.editarCaja = void 0;
var _Caja = _interopRequireDefault(require("../models/Caja.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarCaja = async (req, res) => {
  const {
    numeroEconomico,
    placas
  } = req.body;
  if ([numeroEconomico, placas].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const numeroEconomicoExite = await _Caja.default.findOne({
      numeroEconomico
    });
    if (numeroEconomicoExite) {
      const error = new Error("Caja ya Almacenada");
      return res.status(400).json({
        msg: error.message
      });
    }
    const caja = new _Caja.default(req.body);
    const cajaAlmacenada = await caja.save();
    return res.json(cajaAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarCaja = registrarCaja;
const obtenerCajas = async (req, res) => {
  try {
    const cajas = await _Caja.default.find();
    if (cajas.length === 0) {
      const error = new Error("No hay Cajas por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(cajas);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerCajas = obtenerCajas;
const obtenerCaja = async (req, res) => {
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
    const caja = await _Caja.default.findById(id);
    if (!caja) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(caja);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerCaja = obtenerCaja;
const editarCaja = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    numeroEconomico,
    placas
  } = req.body;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  if ([numeroEconomico, placas].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    // const numeroEconomicoExite = await Caja.findOne({ numeroEconomico })

    // if (numeroEconomicoExite) {
    //   const error = new Error("Caja ya Almacenada")
    //   return res.status(400).json({ msg: error.message })
    // }

    const caja = await _Caja.default.findById(id);
    if (!caja) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    caja.numeroEconomico = req.body.numeroEconomico || caja.numeroEconomico;
    caja.placas = req.body.placas || caja.placas;
    const cajaAlmacenada = await caja.save();
    return res.json(cajaAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarCaja = editarCaja;
const eliminarCaja = async (req, res) => {
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
    const caja = await _Caja.default.findById(id);
    if (!caja) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const cajaEliminar = await caja.deleteOne(caja);
    return res.json(cajaEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarCaja = eliminarCaja;