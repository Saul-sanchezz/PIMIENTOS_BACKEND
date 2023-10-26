import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarLineaTransporte,
  obtenerLineaTransportes,
  obtenerLineaTransporte,
  editarLineaTransporte,
  eliminarLineaTransporte,
} from "../controllers/lineaTransporteController.js"

router.route("/")
  .post(registrarLineaTransporte)
  .get(obtenerLineaTransportes)

router.get("/ver/:id", obtenerLineaTransporte)
router.put("/editar/:id", editarLineaTransporte)
router.delete("/eliminar/:id", eliminarLineaTransporte)



export default router