const express = require("express");
const router = express.Router()
const  {
  registrarReporteEmpaque,
  obtenerReportesEmpaques,
  obtenerReporteEmpaque,
  editarReporteEmpaque,
  eliminarReporteEmpaque,
} = require("../controllers/reporteEmpaqueController.js")


router.route("/")
  .post(registrarReporteEmpaque)
  .get(obtenerReportesEmpaques)
  
router.get("/ver/:id", obtenerReporteEmpaque)
router.put("/editar/:id", editarReporteEmpaque)
router.delete("/eliminar/:id", eliminarReporteEmpaque)



module.exports = router