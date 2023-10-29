import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarPallet,
  obtenerPallets,
  obtenerPallet,
  editarPallet,
  eliminarPallet,
  obtenerDetalles,
  buscarPorFecha,
} from "../controllers/palletController.js"

router.get("/", buscarPorFecha)
router.route("/")
  .post(registrarPallet)
  .get(obtenerPallets)
router.get("/ver/:id", obtenerPallet)
router.put("/editar/:id", editarPallet)
router.delete("/eliminar/:id", eliminarPallet)
router.get("/obtener-detalles", obtenerDetalles)




export default router