const jwt = require("jsonwebtoken")
const Usuario = require("../models/Usuario.js")

const checkAuth = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v")
      return next()
    } catch (error) {
      return res.status(404).json({ msj: "Hubo un error" })
    }
  }
  if (!token) {
    const error = new Error("Token no valido")
    return res.status(401).json({msj: error.message})
  }
  next()
}

module.exports = checkAuth
