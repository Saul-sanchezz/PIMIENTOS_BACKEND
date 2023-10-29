"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _nombreEmpresaController = require("../controllers/nombreEmpresaController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_nombreEmpresaController.registrarEmpresa).get(_nombreEmpresaController.obtenerEmpresas);
router.get("/ver/:id", _nombreEmpresaController.obtenerEmpresa);
router.put("/editar/:id", _nombreEmpresaController.editarEmpresa);
router.delete("/eliminar/:id", _nombreEmpresaController.eliminarEmpresa);
var _default = exports.default = router;