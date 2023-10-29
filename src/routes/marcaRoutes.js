import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"
import {
  registrarMarca,
  obtenerMarcas,
  obtenerMarca,
  editarMarca,
  eliminarMarca,
} from "../controllers/marcaController.js"

router.route("/")
  .post(registrarMarca)
  .get(obtenerMarcas)

router.get("/ver/:id", obtenerMarca)
router.put("/editar/:id", editarMarca)
router.delete("/eliminar/:id", eliminarMarca)



export default router