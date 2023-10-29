"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _palletController = require("../controllers/palletController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get("/", _palletController.buscarPorFecha);
router.route("/").post(_palletController.registrarPallet).get(_palletController.obtenerPallets);
router.get("/ver/:id", _palletController.obtenerPallet);
router.put("/editar/:id", _palletController.editarPallet);
router.delete("/eliminar/:id", _palletController.eliminarPallet);
router.get("/obtener-detalles", _palletController.obtenerDetalles);
var _default = exports.default = router;