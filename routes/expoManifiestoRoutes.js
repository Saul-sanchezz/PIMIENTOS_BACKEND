"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _expoManifiestoController = require("../controllers/expoManifiestoController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_expoManifiestoController.registrarExpoManifiesto).get(_expoManifiestoController.obtenerExpoManifiestos);
router.get("/obtener-detalles", _expoManifiestoController.obtenerDetalles);
router.get("/ver/:id", _expoManifiestoController.obtenerExpoManifiesto);
router.put("/editar/:id", _expoManifiestoController.editarExpoManifiesto);
router.delete("/eliminar/:id", _expoManifiestoController.eliminarExpoManifiesto);
// obtener los manifiestos para el reporte de empaque 
router.get("/obtener-manifiestos-reporte", _expoManifiestoController.obtenerManifiestosParaReporte);
var _default = exports.default = router;