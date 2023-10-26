import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"
import {
  resgistrarManifiesto,
  obtenerManifiestos,
  obtenerManifiesto,
  editarManifiesto,
  eliminarManifiesto,
  obtenerDetalles,
} from "../controllers/manifiestoController.js"

router.route("/")
  .post(resgistrarManifiesto)
  .get(obtenerManifiestos)

router.get("/obtener-detalles", obtenerDetalles,)
router.get("/ver/:id", obtenerManifiesto)
router.put("/editar/:id", editarManifiesto)
router.delete("/eliminar/:id", eliminarManifiesto)


export default router