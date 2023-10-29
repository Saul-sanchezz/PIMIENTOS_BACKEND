"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _productoInventarioController = require("../controllers/productoInventarioController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_productoInventarioController.registrarProducto).get(_productoInventarioController.obtenerProductos);
router.get("/ver/:id", _productoInventarioController.obtenerProducto);
router.put("/editar/:id", _productoInventarioController.editarProducto);
router.delete("/eliminar/:id", _productoInventarioController.eliminarProducto);
router.get("/obtener-detalles", _productoInventarioController.obtenerDetalles);
var _default = exports.default = router;