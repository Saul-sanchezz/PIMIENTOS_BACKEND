import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarPisoActual,
  obtenerPisoActualAll,
  obtenerPisoActualId,
  editarPisoActualId,
  eliminarPisoActualId,
} from "../controllers/pisoActualController.js"

router.route("/")
  .post(registrarPisoActual)
  .get(obtenerPisoActualAll)

router.get("/ver/:id", obtenerPisoActualId)
router.put("/editar/:id", editarPisoActualId)
router.delete("/eliminar/:id", eliminarPisoActualId)



export default router