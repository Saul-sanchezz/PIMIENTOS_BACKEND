const express = require("express");
const router = express.Router()
const {
  registrarCultivo,
  obtenerCultivos,
  obtenerCultivo,
  editarCultivo,
  eliminarCultivo,
} = require("../controllers/cultivoController.js")

router.route("/")
  .post(registrarCultivo)
  .get(obtenerCultivos)

router.get("/ver/:id", obtenerCultivo)
router.put("/editar/:id", editarCultivo)
router.delete("/eliminar/:id", eliminarCultivo)



module.exports = router