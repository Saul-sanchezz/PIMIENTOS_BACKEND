import express from "express";
const router = express.Router()
import checkAuth from "../middleware/checkAuth.js"

import {
  registrarTrailer,
  obtenerTrailers,
  obtenerTrailer,
  editarTrailer,
  eliminarTrailer,
} from "../controllers/trailerController.js"

router.route("/")
  .post(registrarTrailer)
  .get(obtenerTrailers)

router.get("/ver/:id", obtenerTrailer)
router.put("/editar/:id", editarTrailer)
router.delete("/eliminar/:id", eliminarTrailer)



export default router