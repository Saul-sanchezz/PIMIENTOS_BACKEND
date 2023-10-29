"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resgistrarManifiesto = exports.obtenerManifiestos = exports.obtenerManifiesto = exports.obtenerDetalles = exports.eliminarManifiesto = exports.editarManifiesto = void 0;
var _ManifiestoNacional = _interopRequireDefault(require("../models/ManifiestoNacional.js"));
var _Empresa = _interopRequireDefault(require("../models/Empresa.js"));
var _Chofer = _interopRequireDefault(require("../models/Chofer.js"));
var _Trailer = _interopRequireDefault(require("../models/Trailer.js"));
var _Caja = _interopRequireDefault(require("../models/Caja.js"));
var _LineaTransporte = _interopRequireDefault(require("../models/LineaTransporte.js"));
var _Cultivo = _interopRequireDefault(require("../models/Cultivo.js"));
var _Tamano = _interopRequireDefault(require("../models/Tamano.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const resgistrarManifiesto = async (req, res) => {
  const {
    cajas,
    cantidadPallets,
    celular,
    cliente,
    cultivo,
    fletera,
    horaSalida,
    marcaTrailer,
    nombreChofer,
    nroEconomico,
    pallets,
    placasCaja,
    placasTrailer,
    sellos,
    termografo,
    fechaEmbarque,
    nombreEmpresa,
    nroFactura
  } = req.body;
  if ([cajas, cantidadPallets, celular, cliente, cultivo, fletera, horaSalida, marcaTrailer, nombreChofer, nroEconomico, pallets, placasCaja, placasTrailer, sellos, termografo, fechaEmbarque, nombreEmpresa, nroFactura].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const nroFacturaExite = await _ManifiestoNacional.default.findOne({
      nroFactura
    });
    if (nroFacturaExite) {
      const error = new Error("Manifiesto ya se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const manifiesto = new _ManifiestoNacional.default(req.body);
    if (manifiesto.nroFactura === 0) {
      const error = new Error("Numero de factura no valido");
      return res.status(400).json({
        msg: error.message
      });
    }
    const nroFacturaPorAsignar = await _ManifiestoNacional.default.find().count();
    manifiesto.nroFactura = nroFacturaPorAsignar + 1;
    const manifiestoAlmacenado = await manifiesto.save();
    return res.json(manifiestoAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.resgistrarManifiesto = resgistrarManifiesto;
const obtenerManifiestos = async (req, res) => {
  try {
    const manifiestos = await _ManifiestoNacional.default.find();
    if (manifiestos.length === 0) {
      const error = new Error("No Hay manifiestos por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(manifiestos);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerManifiestos = obtenerManifiestos;
const obtenerManifiesto = async (req, res) => {
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
    const manifiesto = await _ManifiestoNacional.default.findById(id);
    if (!manifiesto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const empresa = await _Empresa.default.findOne({
      nombre: manifiesto.nombreEmpresa
    });
    const manifiestoActualizado = {
      cajas: manifiesto.cajas,
      cantidadPallets: manifiesto.cantidadPallets,
      celular: manifiesto.celular,
      cliente: manifiesto.cliente,
      cultivo: manifiesto.cultivo,
      detallesPrecios: manifiesto.detallesPrecios,
      fechaEmbarque: manifiesto.fechaEmbarque,
      fletera: manifiesto.fletera,
      horaSalida: manifiesto.horaSalida,
      marcaTrailer: manifiesto.marcaTrailer,
      nombreChofer: manifiesto.nombreChofer,
      nombreEmpresa: manifiesto.nombreEmpresa,
      nroEconomico: manifiesto.nroEconomico,
      nroFactura: manifiesto.nroFactura,
      pallets: manifiesto.pallets,
      placasCaja: manifiesto.placasCaja,
      placasTrailer: manifiesto.placasTrailer,
      sellos: manifiesto.sellos,
      termografo: manifiesto.termografo,
      empresa
    };
    return res.json(manifiestoActualizado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerManifiesto = obtenerManifiesto;
const editarManifiesto = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    cajas,
    cantidadPallets,
    celular,
    cliente,
    cultivo,
    fletera,
    horaSalida,
    marcaTrailer,
    nombreChofer,
    nroEconomico,
    pallets,
    placasCaja,
    placasTrailer,
    sellos,
    termografo,
    fechaEmbarque,
    nombreEmpresa,
    nroFactura
  } = req.body;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  if ([cajas, cantidadPallets, celular, cliente, cultivo, fletera, horaSalida, marcaTrailer, nombreChofer, nroEconomico, pallets, placasCaja, placasTrailer, sellos, termografo, fechaEmbarque, nombreEmpresa, nroFactura].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const manifiesto = await _ManifiestoNacional.default.findById(id);
    if (!manifiesto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    manifiesto.cajas = req.body.cajas || manifiesto.cajas;
    manifiesto.cantidadPallets = req.body.cantidadPallets || manifiesto.cantidadPallets;
    manifiesto.celular = req.body.celular || manifiesto.celular;
    manifiesto.cliente = req.body.cliente || manifiesto.cliente;
    manifiesto.cultivo = req.body.cultivo || manifiesto.cultivo;
    // array
    manifiesto.detallesPrecios = req.body.detallesPrecios || manifiesto.detallesPrecios;
    manifiesto.fletera = req.body.fletera || manifiesto.fletera;
    manifiesto.horaSalida = req.body.horaSalida || manifiesto.horaSalida;
    manifiesto.marcaTrailer = req.body.marcaTrailer || manifiesto.marcaTrailer;
    manifiesto.nombreChofer = req.body.nombreChofer || manifiesto.nombreChofer;
    manifiesto.nroEconomico = req.body.nroEconomico || manifiesto.nroEconomico;
    //manifiesto.nroFactura = req.body.nroFactura || manifiesto.nroFactura;
    manifiesto.pallets = req.body.pallets || manifiesto.pallets;
    manifiesto.placasCaja = req.body.placasCaja || manifiesto.placasCaja;
    manifiesto.placasTrailer = req.body.placasTrailer || manifiesto.placasTrailer;
    manifiesto.sellos = req.body.sellos || manifiesto.sellos;
    manifiesto.termografo = req.body.termografo || manifiesto.termografo;
    manifiesto.nombreEmpresa = req.body.nombreEmpresa || manifiesto.nombreEmpresa;
    const manifiestoAlmacenado = await manifiesto.save();
    return res.json(manifiestoAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarManifiesto = editarManifiesto;
const eliminarManifiesto = async (req, res) => {
  // en el frontend no se usa este metodo por no romper la DB
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
    const manifiesto = await _ManifiestoNacional.default.findById(id);
    if (!manifiesto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const manifiestoEliminar = await manifiesto.deleteOne(manifiesto);
    return res.json(manifiestoEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarManifiesto = eliminarManifiesto;
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
      placas: true,
      marca: true
    });
    const cajas = await _Caja.default.find({}, {
      id: true,
      numeroEconomico: true,
      placas: true
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
    return res.json({
      empresas,
      choferes,
      trailers,
      cajas,
      lineaTransporte,
      cultivos,
      tamanos
    });
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerDetalles = obtenerDetalles;