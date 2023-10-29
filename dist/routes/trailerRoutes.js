"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _checkAuth = _interopRequireDefault(require("../middleware/checkAuth.js"));
var _trailerController = require("../controllers/trailerController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.route("/").post(_trailerController.registrarTrailer).get(_trailerController.obtenerTrailers);
router.get("/ver/:id", _trailerController.obtenerTrailer);
router.put("/editar/:id", _trailerController.editarTrailer);
router.delete("/eliminar/:id", _trailerController.eliminarTrailer);
var _default = exports.default = router;