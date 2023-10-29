import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"
import {
  registrarTamano,
  obtenerTamanos,
  obtenerTamano,
  editarTamano,
  eliminarTamano,
} from "../controllers/tamanoController.js"

router.route("/")
  .post(registrarTamano)
  .get(obtenerTamanos)

router.get("/ver/:id", obtenerTamano)
router.put("/editar/:id", editarTamano)
router.delete("/eliminar/:id", eliminarTamano)



export default router