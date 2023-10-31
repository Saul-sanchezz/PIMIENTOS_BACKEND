const express = require("express");
const router = express.Router()
const  {
  registrarMarca,
  obtenerMarcas,
  obtenerMarca,
  editarMarca,
  eliminarMarca,
} = require("../controllers/marcaController.js")

router.route("/")
  .post(registrarMarca)
  .get(obtenerMarcas)

router.get("/ver/:id", obtenerMarca)
router.put("/editar/:id", editarMarca)
router.delete("/eliminar/:id", eliminarMarca)



module.exports = router
