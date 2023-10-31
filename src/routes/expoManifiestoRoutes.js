const express = require("express");
const router = express.Router()
const {
  registrarExpoManifiesto,
  obtenerExpoManifiestos,
  obtenerExpoManifiesto,
  editarExpoManifiesto,
  eliminarExpoManifiesto,
  obtenerDetalles,
  obtenerManifiestosParaReporte
} = require("../controllers/expoManifiestoController.js")

router.route("/")
  .post(registrarExpoManifiesto)
  .get(obtenerExpoManifiestos)

router.get("/obtener-detalles", obtenerDetalles)
router.get("/ver/:id", obtenerExpoManifiesto)
router.put("/editar/:id", editarExpoManifiesto)
router.delete("/eliminar/:id", eliminarExpoManifiesto)
// obtener los manifiestos para el reporte de empaque 
router.get("/obtener-manifiestos-reporte", obtenerManifiestosParaReporte)



module.exports = router