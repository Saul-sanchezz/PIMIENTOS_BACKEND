import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
    registrarCultivo,
    obtenerCultivos,
    obtenerCultivo,
    editarCultivo,
    eliminarCultivo,
} from "../controllers/cultivoController.js"

router.route("/")
  .post(registrarCultivo)
  .get(obtenerCultivos)

router.get("/ver/:id", obtenerCultivo)
router.put("/editar/:id", editarCultivo)
router.delete("/eliminar/:id", eliminarCultivo)



export default router