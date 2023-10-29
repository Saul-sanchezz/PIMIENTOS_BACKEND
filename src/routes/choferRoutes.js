import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarChofer,
  obtenerChoferes,
  obtenerChofer,
  editarChofer,
  eliminarChofer,
} from "../controllers/choferController.js"

router.route("/")
  .post(registrarChofer)
  .get(obtenerChoferes)

router.get("/ver/:id", obtenerChofer)
router.put("/editar/:id", editarChofer)
router.delete("/eliminar/:id", eliminarChofer)



export default router