const express = require("express");
const router = express.Router()

const {
  registrarEmpresa,
  obtenerEmpresas,
  obtenerEmpresa,
  editarEmpresa,
  eliminarEmpresa,
} = require ("../controllers/nombreEmpresaController.js")

router.route("/")
  .post(registrarEmpresa)
  .get(obtenerEmpresas)

router.get("/ver/:id", obtenerEmpresa)
router.put("/editar/:id", editarEmpresa)
router.delete("/eliminar/:id", eliminarEmpresa)



module.exports = router