"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _pisoActualController = require("../controllers/pisoActualController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_pisoActualController.registrarPisoActual).get(_pisoActualController.obtenerPisoActualAll);
router.get("/ver/:id", _pisoActualController.obtenerPisoActualId);
router.put("/editar/:id", _pisoActualController.editarPisoActualId);
router.delete("/eliminar/:id", _pisoActualController.eliminarPisoActualId);
var _default = exports.default = router;