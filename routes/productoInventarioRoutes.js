import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarProducto,
  obtenerProductos,
  obtenerProducto,
  editarProducto,
  eliminarProducto,
  obtenerDetalles,
} from "../controllers/productoInventarioController.js"

router.route("/")
  .post(registrarProducto)
  .get(obtenerProductos)

router.get("/ver/:id", obtenerProducto)
router.put("/editar/:id", editarProducto)
router.delete("/eliminar/:id", eliminarProducto)
router.get("/obtener-detalles", obtenerDetalles)



export default router