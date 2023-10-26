import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarCaja,
  obtenerCajas,
  obtenerCaja,
  editarCaja,
  eliminarCaja,
} from "../controllers/cajaController.js"

router.route("/")
  .post(registrarCaja)
  .get(obtenerCajas)

router.get("/ver/:id", obtenerCaja)
router.put("/editar/:id", editarCaja)
router.delete("/eliminar/:id", eliminarCaja)



export default router