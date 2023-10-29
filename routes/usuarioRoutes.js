"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _usuarioController = require("../controllers/usuarioController.js");
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
// Autenticacion, Registro y Confirmacion de Usuario
router.post("/", _usuarioController.registrar); // crea un nuevo usuario
router.get("/", _usuarioController.obtenerUsuarios);
router.post("/login", _usuarioController.autenticar); // auntenticar usuario
// para usar params debe ser metodo get
router.get("/confirmar/:token", _usuarioController.confirmar); // confirmar usuario 
router.post("/olvide-password", _usuarioController.olvidePassword); // olvide contrasena
//router.get("/olvide-password/:token", comprobarToken) // comprovar token
// router.post("/olvide-password/:token", nuevoPassword) 
// se remplazan estas rutas asi
router.route("/olvide-password/:token").get(_usuarioController.comprobarToken).post(_usuarioController.nuevoPassword);

// middleware de untenticacion
router.get("/perfil", _checkAuth.default, _usuarioController.perfil);
router.get("/ver/:id", _usuarioController.obtenerUsuario);
router.put("/editar/:id", _usuarioController.editarUsuario);
router.delete("/eliminar/:id", _usuarioController.eliminarUsuario);
var _default = exports.default = router;