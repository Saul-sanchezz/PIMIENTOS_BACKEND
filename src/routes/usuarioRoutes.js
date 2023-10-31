const express = require("express")
const router = express.Router()
const {
  registrar, 
  autenticar, 
  confirmar, 
  olvidePassword, 
  comprobarToken, 
  nuevoPassword,
  perfil,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarioController.js")
const checkAuth = require("../middleware/checkAuth.js")

router.post("/", registrar) 
router.get("/", obtenerUsuarios)
router.post("/login", autenticar) 
router.get("/confirmar/:token", confirmar) 
router.post("/olvide-password", olvidePassword)
router.route("/olvide-password/:token")
  .get(comprobarToken)
  .post(nuevoPassword)

router.get("/perfil", checkAuth, perfil)
router.get("/ver/:id", obtenerUsuario)
router.put("/editar/:id", editarUsuario)
router.delete("/eliminar/:id", eliminarUsuario)

module.exports = router




