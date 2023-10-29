"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _tamanoController = require("../controllers/tamanoController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_tamanoController.registrarTamano).get(_tamanoController.obtenerTamanos);
router.get("/ver/:id", _tamanoController.obtenerTamano);
router.put("/editar/:id", _tamanoController.editarTamano);
router.delete("/eliminar/:id", _tamanoController.eliminarTamano);
var _default = exports.default = router;