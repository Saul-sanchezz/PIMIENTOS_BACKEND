import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarPisoAnterior,
  obtenerPisoAnteriorAll,
  obtenerPisoAnteriorId,
  editarPisoAnteriorId,
  eliminarPisoAnteriorId,
} from "../controllers/pisoAnteriorController.js"

router.route("/")
  .post(registrarPisoAnterior)
  .get(obtenerPisoAnteriorAll)

router.get("/ver/:id", obtenerPisoAnteriorId)
router.put("/editar/:id", editarPisoAnteriorId)
router.delete("/eliminar/:id", eliminarPisoAnteriorId)



export default router