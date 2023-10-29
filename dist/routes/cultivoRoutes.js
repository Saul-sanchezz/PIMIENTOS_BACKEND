"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _cultivoController = require("../controllers/cultivoController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_cultivoController.registrarCultivo).get(_cultivoController.obtenerCultivos);
router.get("/ver/:id", _cultivoController.obtenerCultivo);
router.put("/editar/:id", _cultivoController.editarCultivo);
router.delete("/eliminar/:id", _cultivoController.eliminarCultivo);
var _default = exports.default = router;