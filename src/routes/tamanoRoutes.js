const express = require("express");
const router = express.Router()
const  {
  registrarTamano,
  obtenerTamanos,
  obtenerTamano,
  editarTamano,
  eliminarTamano,
} = require("../controllers/tamanoController.js")

router.route("/")
  .post(registrarTamano)
  .get(obtenerTamanos)

router.get("/ver/:id", obtenerTamano)
router.put("/editar/:id", editarTamano)
router.delete("/eliminar/:id", eliminarTamano)



module.exports = router