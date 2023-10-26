import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarReporteEmpaque,
  obtenerReportesEmpaques,
  obtenerReporteEmpaque,
  editarReporteEmpaque,
  eliminarReporteEmpaque,
} from "../controllers/reporteEmpaqueController.js"


router.route("/")
  .post(registrarReporteEmpaque)
  .get(obtenerReportesEmpaques)
  
router.get("/ver/:id", obtenerReporteEmpaque)
router.put("/editar/:id", editarReporteEmpaque)
router.delete("/eliminar/:id", eliminarReporteEmpaque)



export default router