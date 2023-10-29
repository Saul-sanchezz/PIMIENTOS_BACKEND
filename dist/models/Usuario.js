"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UsuarioSchema = _mongoose.default.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true
  },
  token: {
    type: String
  },
  confirmado: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  puesto: {
    type: String,
    default: ""
  },
  imgUri: {
    type: String,
    default: ""
  },
  notas: {
    type: String,
    default: ""
  }
}, {
  timestamps: true // crea dos columnas mas una de creado y otra de actualizado
});
// es un middelware antes de guardar 
// ocupas acceder a this por eso la funtion 
UsuarioSchema.pre("save", async function (next) {
  // funcion de mongose
  // si no esta modificando el pasword no agas nada
  if (!this.isModified("password")) {
    next();
  }
  const salt = await _bcrypt.default.genSalt(10);
  // para hashear toma dos parametros el String y el salt
  this.password = await _bcrypt.default.hash(this.password, salt);
});

// para agregarle metodos o funciones al Schema
UsuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
  // para comparar los parssword hasheados
  return await _bcrypt.default.compare(passwordFormulario, this.password);
};
const Usuario = _mongoose.default.model("Usuario", UsuarioSchema);
var _default = exports.default = Usuario;