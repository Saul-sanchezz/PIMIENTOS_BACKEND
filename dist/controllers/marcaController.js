"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarMarca = exports.obtenerMarcas = exports.obtenerMarca = exports.eliminarMarca = exports.editarMarca = void 0;
var _Marca = _interopRequireDefault(require("../models/Marca.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarMarca = async (req, res) => {
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
    const nombreExite = await _Marca.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Marca ya se encuentra almacenada");
      return res.status(400).json({
        msg: error.message
      });
    }
    const marca = new _Marca.default(req.body);
    const marcaAlmacenada = await marca.save();
    return res.json(marcaAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarMarca = registrarMarca;
const obtenerMarcas = async (req, res) => {
  try {
    const marcas = await _Marca.default.find();
    if (marcas.length === 0) {
      const error = new Error("No hay Cultivos por mostrar");
      return res.status(404).json({
        msj: error.message
      });
    }
    return res.json(marcas);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerMarcas = obtenerMarcas;
const obtenerMarca = async (req, res) => {
  const {
    id
  } = req.params;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msj: error.message
    });
  }
  try {
    const marca = await _Marca.default.findById(id);
    if (!marca) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msj: error.message
      });
    }
    return res.json(marca);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerMarca = obtenerMarca;
const editarMarca = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    nombre
  } = req.body;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msj: error.message
    });
  }
  if (nombre === "") {
    const error = new Error("Campo obligatorio");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const nombreExite = await _Marca.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Marca ya se encuentra almacenada");
      return res.status(400).json({
        msg: error.message
      });
    }
    const marca = await _Marca.default.findById(id);
    if (!marca) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msj: error.message
      });
    }
    marca.nombre = req.body.nombre || marca.nombre;
    const marcaAlmacenada = await marca.save();
    return res.json(marcaAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarMarca = editarMarca;
const eliminarMarca = async (req, res) => {
  const {
    id
  } = req.params;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msj: error.message
    });
  }
  try {
    const marca = await _Marca.default.findById(id);
    if (!marca) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msj: error.message
      });
    }
    const marcaEliminar = await marca.deleteOne(marca);
    return res.json(marcaEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarMarca = eliminarMarca;