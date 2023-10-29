"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _envaseController = require("../controllers/envaseController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_envaseController.registrarEnvase).get(_envaseController.obtenerEnvases);
router.get("/ver/:id", _envaseController.obtenerEnvase);
router.put("/editar/:id", _envaseController.editarEnvase);
router.delete("/eliminar/:id", _envaseController.eliminarEnvase);
var _default = exports.default = router;