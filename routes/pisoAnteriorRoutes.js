"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _pisoAnteriorController = require("../controllers/pisoAnteriorController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_pisoAnteriorController.registrarPisoAnterior).get(_pisoAnteriorController.obtenerPisoAnteriorAll);
router.get("/ver/:id", _pisoAnteriorController.obtenerPisoAnteriorId);
router.put("/editar/:id", _pisoAnteriorController.editarPisoAnteriorId);
router.delete("/eliminar/:id", _pisoAnteriorController.eliminarPisoAnteriorId);
var _default = exports.default = router;