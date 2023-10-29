"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _lineaTransporteController = require("../controllers/lineaTransporteController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_lineaTransporteController.registrarLineaTransporte).get(_lineaTransporteController.obtenerLineaTransportes);
router.get("/ver/:id", _lineaTransporteController.obtenerLineaTransporte);
router.put("/editar/:id", _lineaTransporteController.editarLineaTransporte);
router.delete("/eliminar/:id", _lineaTransporteController.eliminarLineaTransporte);
var _default = exports.default = router;