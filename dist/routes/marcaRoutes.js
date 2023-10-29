"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _marcaController = require("../controllers/marcaController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_marcaController.registrarMarca).get(_marcaController.obtenerMarcas);
router.get("/ver/:id", _marcaController.obtenerMarca);
router.put("/editar/:id", _marcaController.editarMarca);
router.delete("/eliminar/:id", _marcaController.eliminarMarca);
var _default = exports.default = router;