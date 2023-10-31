const express = require("express");
const router = express.Router()
const {
  registrarCaja,
  obtenerCajas,
  obtenerCaja,
  editarCaja,
  eliminarCaja,
} = require("../controllers/cajaController.js");

router.route("/")
  .post(registrarCaja)
  .get(obtenerCajas)

router.get("/ver/:id", obtenerCaja)
router.put("/editar/:id", editarCaja)
router.delete("/eliminar/:id", eliminarCaja)



module.exports = router