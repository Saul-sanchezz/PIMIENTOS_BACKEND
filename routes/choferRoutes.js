"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _choferController = require("../controllers/choferController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_choferController.registrarChofer).get(_choferController.obtenerChoferes);
router.get("/ver/:id", _choferController.obtenerChofer);
router.put("/editar/:id", _choferController.editarChofer);
router.delete("/eliminar/:id", _choferController.eliminarChofer);
var _default = exports.default = router;