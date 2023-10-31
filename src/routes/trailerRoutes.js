const express = require("express");
const router = express.Router()
const  {
  registrarTrailer,
  obtenerTrailers,
  obtenerTrailer,
  editarTrailer,
  eliminarTrailer,
} = require("../controllers/trailerController.js")

router.route("/")
  .post(registrarTrailer)
  .get(obtenerTrailers)

router.get("/ver/:id", obtenerTrailer)
router.put("/editar/:id", editarTrailer)
router.delete("/eliminar/:id", eliminarTrailer)



module.exports = router