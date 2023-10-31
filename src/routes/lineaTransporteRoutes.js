const express = require("express");
const router = express.Router()
const  {
  registrarLineaTransporte,
  obtenerLineaTransportes,
  obtenerLineaTransporte,
  editarLineaTransporte,
  eliminarLineaTransporte,
} = require("../controllers/lineaTransporteController.js");

router.route("/")
  .post(registrarLineaTransporte)
  .get(obtenerLineaTransportes)

router.get("/ver/:id", obtenerLineaTransporte)
router.put("/editar/:id", editarLineaTransporte)
router.delete("/eliminar/:id", eliminarLineaTransporte)



module.exports = router
