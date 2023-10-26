import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarEmpresa,
  obtenerEmpresas,
  obtenerEmpresa,
  editarEmpresa,
  eliminarEmpresa,
} from "../controllers/nombreEmpresaController.js"

router.route("/")
  .post(registrarEmpresa)
  .get(obtenerEmpresas)

router.get("/ver/:id", obtenerEmpresa)
router.put("/editar/:id", editarEmpresa)
router.delete("/eliminar/:id", eliminarEmpresa)



export default router