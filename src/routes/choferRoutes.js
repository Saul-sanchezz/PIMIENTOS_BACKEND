const express = require("express");
const router = express.Router()
const {
  registrarChofer,
  obtenerChoferes,
  obtenerChofer,
  editarChofer,
  eliminarChofer,
} = require("../controllers/choferController.js");

router.route("/")
  .post(registrarChofer)
  .get(obtenerChoferes)

router.get("/ver/:id", obtenerChofer)
router.put("/editar/:id", editarChofer)
router.delete("/eliminar/:id", eliminarChofer)


module.exports = router