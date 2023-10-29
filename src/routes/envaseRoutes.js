import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"
import {
  registrarEnvase,
  obtenerEnvases,
  obtenerEnvase,
  editarEnvase,
  eliminarEnvase,
} from "../controllers/envaseController.js"

router.route("/")
  .post(registrarEnvase)
  .get(obtenerEnvases)

router.get("/ver/:id", obtenerEnvase)
router.put("/editar/:id", editarEnvase)
router.delete("/eliminar/:id", eliminarEnvase)



export default router