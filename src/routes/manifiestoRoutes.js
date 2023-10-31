const express = require("express");
const router = express.Router()
const {
  resgistrarManifiesto,
  obtenerManifiestos,
  obtenerManifiesto,
  editarManifiesto,
  eliminarManifiesto,
  obtenerDetalles,
} = require("../controllers/manifiestoController.js")

router.route("/")
  .post(resgistrarManifiesto)
  .get(obtenerManifiestos)

router.get("/obtener-detalles", obtenerDetalles,)
router.get("/ver/:id", obtenerManifiesto)
router.put("/editar/:id", editarManifiesto)
router.delete("/eliminar/:id", eliminarManifiesto)


module.exports = router
