"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarExpoManifiesto = exports.obtenerManifiestosParaReporte = exports.obtenerExpoManifiestos = exports.obtenerExpoManifiesto = exports.obtenerDetalles = exports.eliminarExpoManifiesto = exports.editarExpoManifiesto = void 0;
var _ExpoManifiesto = _interopRequireDefault(require("../models/ExpoManifiesto.js"));
var _Empresa = _interopRequireDefault(require("../models/Empresa.js"));
var _Chofer = _interopRequireDefault(require("../models/Chofer.js"));
var _Trailer = _interopRequireDefault(require("../models/Trailer.js"));
var _Caja = _interopRequireDefault(require("../models/Caja.js"));
var _LineaTransporte = _interopRequireDefault(require("../models/LineaTransporte.js"));
var _Cultivo = _interopRequireDefault(require("../models/Cultivo.js"));
var _Tamano = _interopRequireDefault(require("../models/Tamano.js"));
var _Marca = _interopRequireDefault(require("../models/Marca.js"));
var _Envase = _interopRequireDefault(require("../models/Envase.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarExpoManifiesto = async (req, res) => {
  const {
    nroManifiesto,
    listaProductos
  } = req.body;
  if (nroManifiesto.length < 2 || nroManifiesto.length > 3) {
    const error = new Error("Numero de manifiesto invalido");
    return res.status(400).json({
      msg: error.message
    });
  }
  if (nroManifiesto === 0 || listaProductos === undefined || listaProductos.length === 0) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const expoManifiestoExite = await _ExpoManifiesto.default.findOne({
      nroManifiesto
    });
    if (expoManifiestoExite) {
      const error = new Error("Nro de Manifiesto ya se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const expoManifiesto = new _ExpoManifiesto.default(req.body);
    const expoManifiestoAlmacenado = await expoManifiesto.save();
    return res.json(expoManifiestoAlmacenado);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarExpoManifiesto = registrarExpoManifiesto;
const obtenerExpoManifiestos = async (req, res) => {
  try {
    const expoManifiestos = await _ExpoManifiesto.default.find();
    if (expoManifiestos.length === 0) {
      const error = new Error("No hay manifiestos por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(expoManifiestos);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerExpoManifiestos = obtenerExpoManifiestos;
const obtenerExpoManifiesto = async (req, res) => {
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
    const expoManifiesto = await _ExpoManifiesto.default.findById(id).populate(["agenciaMx", "agenciaUsa", "caja", "chofer", "lineaTransporte", "nombreEmpaque", "trailer", "agenciaDestino"]);
    if (!expoManifiesto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(expoManifiesto);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerExpoManifiesto = obtenerExpoManifiesto;
const editarExpoManifiesto = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    nroManifiesto,
    listaProductos
  } = req.body;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  if (nroManifiesto.length < 2 || nroManifiesto.length > 3) {
    const error = new Error("Numero de manifiesto invalido");
    return res.status(400).json({
      msg: error.message
    });
  }
  if (nroManifiesto === 0 || listaProductos === undefined || listaProductos.length === 0) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const expoManifiesto = await _ExpoManifiesto.default.findById(id);
    if (!expoManifiesto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    expoManifiesto.nroManifiesto = req.body.nroManifiesto || expoManifiesto.nroManifiesto;
    expoManifiesto.nroPallets = req.body.nroPallets || expoManifiesto.nroPallets;
    expoManifiesto.fechaEmbarque = req.body.fechaEmbarque || expoManifiesto.fechaEmbarque;
    expoManifiesto.agregadoReporte = req.body.agregadoReporte;
    expoManifiesto.agenciaMx = req.body.agenciaMx || expoManifiesto.agenciaMx;
    expoManifiesto.agenciaUsa = req.body.agenciaUsa || expoManifiesto.agenciaUsa;
    expoManifiesto.nombreEmpaque = req.body.nombreEmpaque || expoManifiesto.nombreEmpaque;
    expoManifiesto.agenciaDestino = req.body.agenciaDestino || expoManifiesto.agenciaDestino;
    expoManifiesto.chofer = req.body.chofer || expoManifiesto.chofer;
    expoManifiesto.trailer = req.body.trailer || expoManifiesto.trailer;
    expoManifiesto.caja = req.body.caja || expoManifiesto.caja;
    expoManifiesto.lineaTransporte = req.body.lineaTransporte || expoManifiesto.lineaTransporte;
    expoManifiesto.listaProductos = req.body.listaProductos || expoManifiesto.listaProductos;
    const expoManifiestoAlmacenado = await expoManifiesto.save();
    return res.json(expoManifiestoAlmacenado);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarExpoManifiesto = editarExpoManifiesto;
const eliminarExpoManifiesto = async (req, res) => {
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
    const expoManifiesto = await _ExpoManifiesto.default.findById(id);
    if (!expoManifiesto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const expoManifiestoEliminar = await expoManifiesto.deleteOne(expoManifiesto);
    return res.json(expoManifiestoEliminar);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarExpoManifiesto = eliminarExpoManifiesto;
const obtenerDetalles = async (req, res) => {
  try {
    const empresas = await _Empresa.default.find({}, {
      id: true,
      nombre: true
    });
    const choferes = await _Chofer.default.find({}, {
      id: true,
      nombre: true
    });
    const trailers = await _Trailer.default.find({}, {
      id: true,
      numeroEconomico: true
    });
    const cajas = await _Caja.default.find({}, {
      id: true,
      numeroEconomico: true
    });
    const lineaTransporte = await _LineaTransporte.default.find({}, {
      id: true,
      nombre: true
    });
    const cultivos = await _Cultivo.default.find({}, {
      id: true,
      nombre: true
    });
    const tamanos = await _Tamano.default.find({}, {
      id: true,
      nombre: true
    });
    const marcas = await _Marca.default.find({}, {
      id: true,
      nombre: true
    });
    const envases = await _Envase.default.find({}, {
      id: true,
      nombre: true
    });
    return res.json({
      empresas,
      choferes,
      trailers,
      cajas,
      lineaTransporte,
      cultivos,
      tamanos,
      marcas,
      envases
    });
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerDetalles = obtenerDetalles;
const obtenerManifiestosParaReporte = async (req, res) => {
  try {
    const manifiestosParaReporte = await _ExpoManifiesto.default.find({
      agregadoReporte: false
    });
    return res.json(manifiestosParaReporte);
  } catch (error) {
    res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerManifiestosParaReporte = obtenerManifiestosParaReporte;