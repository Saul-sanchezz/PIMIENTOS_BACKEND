"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarEmpresa = exports.obtenerEmpresas = exports.obtenerEmpresa = exports.eliminarEmpresa = exports.editarEmpresa = void 0;
var _Empresa = _interopRequireDefault(require("../models/Empresa.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarEmpresa = async (req, res) => {
  const {
    nombre,
    direccion,
    ciudad,
    rfc,
    tipo
  } = req.body;
  const tipoEmpresa = ["Embarcador", "Distribuidor", "AgenciaAduanal"];
  if ([nombre, direccion, ciudad, rfc].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const nombreExite = await _Empresa.default.findOne({
      nombre
    });
    if (nombreExite) {
      const error = new Error("Nombre de Empresa ya se encuentra almacenado");
      return res.status(400).json({
        msg: error.message
      });
    }
    if (!tipoEmpresa.includes(tipo)) {
      const error = new Error("Tipo de empresa no valido");
      return res.status(400).json({
        msg: error.message
      });
    }
    const empresa = new _Empresa.default(req.body);
    const empresaAlmacenada = await empresa.save();
    return res.json(empresaAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarEmpresa = registrarEmpresa;
const obtenerEmpresas = async (req, res) => {
  try {
    const empresas = await _Empresa.default.find();
    if (empresas.length === 0) {
      const error = new Error("No hay Empresas por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(empresas);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerEmpresas = obtenerEmpresas;
const obtenerEmpresa = async (req, res) => {
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
    const empresa = await _Empresa.default.findById(id);
    if (!empresa) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(empresa);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerEmpresa = obtenerEmpresa;
const editarEmpresa = async (req, res) => {
  const {
    nombre,
    direccion,
    ciudad,
    rfc,
    tipo
  } = req.body;
  const {
    id
  } = req.params;
  const tipoEmpresa = ["Embarcador", "Distribuidor", "AgenciaAduanal"];
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  if ([nombre, direccion, ciudad, rfc].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  if (!tipoEmpresa.includes(tipo)) {
    const error = new Error("Tipo de empresa no valido");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    // const nombreExite = await Empresa.findOne({ nombre })

    // if (nombreExite) {
    //   const error = new Error("Nombre de Empaque ya Existe")
    //   return res.status(400).json({ msg: error.message })
    // }
    const empresa = await _Empresa.default.findById(id);
    if (!empresa) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    empresa.nombre = req.body.nombre || empresa.nombre;
    empresa.direccion = req.body.direccion || empresa.direccion;
    empresa.ciudad = req.body.ciudad || empresa.ciudad;
    empresa.rfc = req.body.rfc || empresa.rfc;
    empresa.tipo = req.body.tipo || empresa.tipo;
    const empresaAlmacenada = await empresa.save();
    return res.json(empresaAlmacenada);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarEmpresa = editarEmpresa;
const eliminarEmpresa = async (req, res) => {
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
    const empresa = await _Empresa.default.findById(id);
    if (!empresa) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const nombreEmpresaEliminar = await empresa.deleteOne(empresa);
    return res.json(nombreEmpresaEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarEmpresa = eliminarEmpresa;