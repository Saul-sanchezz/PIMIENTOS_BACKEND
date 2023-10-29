"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrar = exports.perfil = exports.olvidePassword = exports.obtenerUsuarios = exports.obtenerUsuario = exports.nuevoPassword = exports.eliminarUsuario = exports.editarUsuario = exports.confirmar = exports.comprobarToken = exports.autenticar = void 0;
var _Usuario = _interopRequireDefault(require("../models/Usuario.js"));
var _generarId = _interopRequireDefault(require("../helpers/generarId.js"));
var _generarJWT = _interopRequireDefault(require("../helpers/generarJWT.js"));
var _emails = require("../helpers/emails.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrar = async (req, res) => {
  const {
    email
  } = req.body;
  try {
    const existeUsuario = await _Usuario.default.findOne({
      email
    });
    if (existeUsuario) {
      const error = new Error("usuario ya registrado");
      return res.status(400).json({
        msg: error.message
      });
    }
    const usuario = new _Usuario.default(req.body);
    usuario.token = (0, _generarId.default)();
    const usuarioAlmacenado = await usuario.save();
    // emailRegistro({
    //   email: usuario.email,
    //   nombre: usuario.nombre,
    //   token: usuario.token
    // })
    return res.json({
      msg: "Usuario creado correctamente, revisa tu email para confirmar tu cuenta"
    });
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrar = registrar;
const autenticar = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  try {
    const usuario = await _Usuario.default.findOne({
      email
    });
    if (!usuario) {
      const error = new Error("el usuario no existe");
      return res.status(404).json({
        msg: error.message
      });
    }
    if (!usuario.confirmado) {
      const error = new Error("tu cuenta no ha sido confirmada");
      return res.status(403).json({
        msg: error.message
      });
    }
    if (await usuario.comprobarPassword(password)) {
      return res.json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        token: (0, _generarJWT.default)(usuario._id),
        puesto: usuario.puesto,
        imgUri: usuario.imgUri,
        notas: usuario.notas
      });
    } else {
      const error = new Error("El password es incorrecto");
      return res.status(404).json({
        msg: error.message
      });
    }
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.autenticar = autenticar;
const confirmar = async (req, res) => {
  const {
    token
  } = req.params;
  try {
    const usuarioConfirmar = await _Usuario.default.findOne({
      token
    });
    if (!usuarioConfirmar) {
      const error = new Error("Token no valido");
      return res.status(403).json({
        msg: error.message
      });
    }
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.token = "";
    await usuarioConfirmar.save();
    return res.json({
      msg: "Usuario confirmado correctamente"
    });
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.confirmar = confirmar;
const olvidePassword = async (req, res) => {
  const {
    email
  } = req.body;
  try {
    const usuario = await _Usuario.default.findOne({
      email
    });
    if (!usuario) {
      const error = new Error("el usuario no existe");
      return res.status(404).json({
        msg: error.message
      });
    }
    usuario.token = (0, _generarId.default)();
    await usuario.save();
    (0, _emails.emailOlvidePassword)({
      email: usuario.email,
      nombre: usuario.nombre,
      token: usuario.token
    });
    return res.json({
      msg: "hemos enviado un email con las instrucciones"
    });
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.olvidePassword = olvidePassword;
const comprobarToken = async (req, res) => {
  const {
    token
  } = req.params;
  try {
    const tokenValido = await _Usuario.default.findOne({
      token
    });
    if (tokenValido) {
      return res.json({
        msg: "Token valido y el usuario existe"
      });
    } else {
      const error = new Error("Toke no valido");
      return res.status(404).json({
        msg: error.message
      });
    }
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.comprobarToken = comprobarToken;
const nuevoPassword = async (req, res) => {
  const {
    token
  } = req.params;
  const {
    password
  } = req.body;
  try {
    const usuario = await _Usuario.default.findOne({
      token
    });
    if (usuario) {
      usuario.password = password;
      usuario.token = "";
      await usuario.save();
      return res.json({
        msg: "Password modificado correctamente"
      });
    } else {
      const error = new Error("Toke no valido");
      return res.status(404).json({
        msg: error.message
      });
    }
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.nuevoPassword = nuevoPassword;
const perfil = async (req, res) => {
  const {
    usuario
  } = req;
  return res.json(usuario);
};
exports.perfil = perfil;
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await _Usuario.default.find();
    if (usuarios.length === 0) {
      const error = new Error("No hay Usuarios por mostrar");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(usuarios);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = async (req, res) => {
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
    const usuario = await _Usuario.default.findById(id);
    if (!usuario) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(usuario);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerUsuario = obtenerUsuario;
const editarUsuario = async (req, res) => {
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
    const usuario = await _Usuario.default.findById(id);
    if (!usuario) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.email = req.body.email || usuario.email;
    usuario.confirmado = req.body.confirmado;
    usuario.isAdmin = req.body.isAdmin;
    usuario.puesto = req.body.puesto || usuario.puesto;
    usuario.imgUri = req.body.imgUri || usuario.imgUri;
    usuario.notas = req.body.notas || usuario.notas;
    const usuarioAlmacenado = await usuario.save();
    return res.json(usuarioAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.editarUsuario = editarUsuario;
const eliminarUsuario = async (req, res) => {
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
    const usuario = await _Usuario.default.findById(id);
    if (!usuario) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const usuarioEliminar = await usuario.deleteOne(usuario);
    return res.json(usuarioEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.eliminarUsuario = eliminarUsuario;