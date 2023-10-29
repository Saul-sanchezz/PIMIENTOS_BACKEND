"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarProducto = exports.obtenerProductos = exports.obtenerProducto = exports.obtenerDetalles = exports.eliminarProducto = exports.editarProducto = void 0;
var _productoInventario = _interopRequireDefault(require("../models/productoInventario.js"));
var _Marca = _interopRequireDefault(require("../models/Marca.js"));
var _Envase = _interopRequireDefault(require("../models/Envase.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarProducto = async (req, res) => {
  const {
    nombre,
    marca,
    cantidad
  } = req.body;
  if ([nombre, marca, cantidad].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }
  try {
    const nombreMarcaExite = await _productoInventario.default.findOne({
      nombre,
      marca
    });
    if (nombreMarcaExite) {
      const error = new Error("Nombre y Marca ya Almacenado Seleccione uno distinto");
      return res.status(400).json({
        msg: error.message
      });
    }
    const producto = new _productoInventario.default(req.body);
    const productoAlmacenado = await producto.save();
    return res.json(productoAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarProducto = registrarProducto;
const obtenerProductos = async (req, res) => {
  try {
    const productos = await _productoInventario.default.find();
    if (productos.length === 0) {
      const error = new Error("No hay Productos por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(productos);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerProductos = obtenerProductos;
const obtenerProducto = async (req, res) => {
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
    const producto = await _productoInventario.default.findById(id);
    if (!producto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(producto);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerProducto = obtenerProducto;
const editarProducto = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    nombre,
    marca,
    cantidad
  } = req.body;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  if ([nombre, marca, cantidad].includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message
    });
  }

  // const nombreExite = await ProductoInventario.findOne({ nombre })

  // if (nombreExite) {
  //   const error = new Error("Producto ya se encuentra Almacenado")
  //   return res.status(400).json({ msg: error.message })
  // }
  try {
    const producto = await _productoInventario.default.findById(id);
    if (!producto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    producto.nombre = req.body.nombre || producto.nombre;
    producto.marca = req.body.marca || producto.marca;
    producto.cantidad = req.body.cantidad || producto.cantidad;
    const productoAlmacenado = await producto.save();
    return res.json(productoAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarProducto = editarProducto;
const eliminarProducto = async (req, res) => {
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
    const producto = await _productoInventario.default.findById(id);
    if (!producto) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const productoEliminar = await producto.deleteOne(producto);
    return res.json(productoEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarProducto = eliminarProducto;
const obtenerDetalles = async (req, res) => {
  try {
    const marcas = await _Marca.default.find({}, {
      id: true,
      nombre: true
    });
    const envases = await _Envase.default.find({}, {
      id: true,
      nombre: true
    });
    return res.json({
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