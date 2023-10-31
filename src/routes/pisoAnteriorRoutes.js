const express = require("express");
const router = express.Router()
const  {
  registrarPisoAnterior,
  obtenerPisoAnteriorAll,
  obtenerPisoAnteriorId,
  editarPisoAnteriorId,
  eliminarPisoAnteriorId,
} = require("../controllers/pisoAnteriorController.js")

router.route("/")
  .post(registrarPisoAnterior)
  .get(obtenerPisoAnteriorAll)

router.get("/ver/:id", obtenerPisoAnteriorId)
router.put("/editar/:id", editarPisoAnteriorId)
router.delete("/eliminar/:id", eliminarPisoAnteriorId)



module.exports = router