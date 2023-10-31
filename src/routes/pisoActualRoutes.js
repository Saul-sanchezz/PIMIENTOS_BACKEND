const express = require("express");
const router = express.Router()
const  {
  registrarPisoActual,
  obtenerPisoActualAll,
  obtenerPisoActualId,
  editarPisoActualId,
  eliminarPisoActualId,
} = require("../controllers/pisoActualController.js")

router.route("/")
  .post(registrarPisoActual)
  .get(obtenerPisoActualAll)

router.get("/ver/:id", obtenerPisoActualId)
router.put("/editar/:id", editarPisoActualId)
router.delete("/eliminar/:id", eliminarPisoActualId)



module.exports = router