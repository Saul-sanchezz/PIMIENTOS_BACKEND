import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"
import {
  registrarExpoManifiesto,
  obtenerExpoManifiestos,
  obtenerExpoManifiesto,
  editarExpoManifiesto,
  eliminarExpoManifiesto,
  obtenerDetalles,
  obtenerManifiestosParaReporte
} from "../controllers/expoManifiestoController.js"

router.route("/")
  .post(registrarExpoManifiesto)
  .get(obtenerExpoManifiestos)

router.get("/obtener-detalles", obtenerDetalles)
router.get("/ver/:id", obtenerExpoManifiesto)
router.put("/editar/:id", editarExpoManifiesto)
router.delete("/eliminar/:id", eliminarExpoManifiesto)
// obtener los manifiestos para el reporte de empaque 
router.get("/obtener-manifiestos-reporte", obtenerManifiestosParaReporte)



export default router