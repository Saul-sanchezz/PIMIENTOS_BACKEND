const express = require("express");
const router = express.Router()
const {
  registrarPallet,
  obtenerPallets,
  obtenerPallet,
  editarPallet,
  eliminarPallet,
  obtenerDetalles,
  buscarPorFecha,
} = require("../controllers/palletController.js")

router.get("/", buscarPorFecha)
router.route("/")
  .post(registrarPallet)
  .get(obtenerPallets)
router.get("/ver/:id", obtenerPallet)
router.put("/editar/:id", editarPallet)
router.delete("/eliminar/:id", eliminarPallet)
router.get("/obtener-detalles", obtenerDetalles)




module.exports = router