const express = require("express");
const router = express.Router()
const  {
  registrarProducto,
  obtenerProductos,
  obtenerProducto,
  editarProducto,
  eliminarProducto,
  obtenerDetalles,
} = require("../controllers/productoInventarioController.js")

router.route("/")
  .post(registrarProducto)
  .get(obtenerProductos)

router.get("/ver/:id", obtenerProducto)
router.put("/editar/:id", editarProducto)
router.delete("/eliminar/:id", eliminarProducto)
router.get("/obtener-detalles", obtenerDetalles)



module.exports = router