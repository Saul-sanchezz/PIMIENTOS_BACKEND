const express = require("express");
const router = express.Router()
const {
  registrarEnvase,
  obtenerEnvases,
  obtenerEnvase,
  editarEnvase,
  eliminarEnvase,
} = require("../controllers/envaseController.js")

router.route("/")
  .post(registrarEnvase)
  .get(obtenerEnvases)

router.get("/ver/:id", obtenerEnvase)
router.put("/editar/:id", editarEnvase)
router.delete("/eliminar/:id", eliminarEnvase)



module.exports = router