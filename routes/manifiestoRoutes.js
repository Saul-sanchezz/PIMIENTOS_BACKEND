"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _manifiestoController = require("../controllers/manifiestoController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_manifiestoController.resgistrarManifiesto).get(_manifiestoController.obtenerManifiestos);
router.get("/obtener-detalles", _manifiestoController.obtenerDetalles);
router.get("/ver/:id", _manifiestoController.obtenerManifiesto);
router.put("/editar/:id", _manifiestoController.editarManifiesto);
router.delete("/eliminar/:id", _manifiestoController.eliminarManifiesto);
var _default = exports.default = router;