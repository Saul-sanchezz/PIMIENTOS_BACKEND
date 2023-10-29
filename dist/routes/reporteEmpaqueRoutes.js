"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _reporteEmpaqueController = require("../controllers/reporteEmpaqueController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_reporteEmpaqueController.registrarReporteEmpaque).get(_reporteEmpaqueController.obtenerReportesEmpaques);
router.get("/ver/:id", _reporteEmpaqueController.obtenerReporteEmpaque);
router.put("/editar/:id", _reporteEmpaqueController.editarReporteEmpaque);
router.delete("/eliminar/:id", _reporteEmpaqueController.eliminarReporteEmpaque);
var _default = exports.default = router;