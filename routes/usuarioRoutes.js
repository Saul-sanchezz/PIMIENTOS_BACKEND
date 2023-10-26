import express from "express";
const router = express.Router()
import { 
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
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

// Autenticacion, Registro y Confirmacion de Usuario
router.post("/", registrar) // crea un nuevo usuario
router.get("/", obtenerUsuarios)
router.post("/login", autenticar) // auntenticar usuario
// para usar params debe ser metodo get
router.get("/confirmar/:token", confirmar) // confirmar usuario 
router.post("/olvide-password", olvidePassword) // olvide contrasena
//router.get("/olvide-password/:token", comprobarToken) // comprovar token
// router.post("/olvide-password/:token", nuevoPassword) 
// se remplazan estas rutas asi
router.route("/olvide-password/:token")
  .get(comprobarToken)
  .post(nuevoPassword)

  // middleware de untenticacion
router.get("/perfil", checkAuth, perfil)
router.get("/ver/:id", obtenerUsuario)
router.put("/editar/:id", editarUsuario)
router.delete("/eliminar/:id", eliminarUsuario)

export default router




