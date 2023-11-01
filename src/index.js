const express = require("express");
// const dotenv = require("dotenv")
const cors = require("cors")
const conectarDB = require("./config/db.js")
const usuarioRoutes = require("./routes/usuarioRoutes.js")
const manifiestoRoutes = require("./routes/manifiestoRoutes.js")
const tamanoRoutes = require("./routes/tamanoRoutes.js")
const cultivoRoutes = require("./routes/cultivoRoutes.js")
const marcaRoutes = require("./routes/marcaRoutes.js")
const envaseRoutes = require("./routes/envaseRoutes.js")
const expoManifiestoRotes = require("./routes/expoManifiestoRoutes.js")
const nombreEmpresaRoutes = require("./routes/nombreEmpresaRoutes.js")
const lineaTransporteRoutes = require("./routes/lineaTransporteRoutes.js")
const choferRoutes = require("./routes/choferRoutes.js")
const trailerRoutes = require("./routes/trailerRoutes.js")
const cajaRoutes = require("./routes/cajaRoutes.js")
const pisoAnteriorRoutes = require("./routes/pisoAnteriorRoutes.js")
const pisoActualRoutes = require("./routes/pisoActualRoutes.js")
const palletRoutes = require("./routes/palletRoutes.js")
const productoInventarioRoutes = require("./routes/productoInventarioRoutes.js")
const reporteEmpaqueRoutes= require("./routes/reporteEmpaqueRoutes.js")

const app = express()
app.use(express.json())

// dotenv.config()

conectarDB()

const whitelist = [
  process.env.FRONTEND_URL,
]

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Error de cors"))
    }
  }
}

app.use(cors(corsOptions))

app.use("/api/usuarios", usuarioRoutes)
app.use("/api/nacional-manifiestos", manifiestoRoutes)
app.use("/api/tamanos", tamanoRoutes)
app.use("/api/cultivos", cultivoRoutes)
app.use("/api/marcas", marcaRoutes)
app.use("/api/envases", envaseRoutes)
app.use("/api/expo-manifiestos", expoManifiestoRotes)
app.use("/api/empresas", nombreEmpresaRoutes)
app.use("/api/linea-transportes", lineaTransporteRoutes)
app.use("/api/choferes", choferRoutes)
app.use("/api/trailers", trailerRoutes)
app.use("/api/cajas", cajaRoutes)
app.use("/api/piso-anterior", pisoAnteriorRoutes)
app.use("/api/piso-actual", pisoActualRoutes)
app.use("/api/pallets", palletRoutes)
app.use("/api/inventario-productos", productoInventarioRoutes)
app.use("/api/reportes-empaque", reporteEmpaqueRoutes)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`servidor conectado en el puerto ${PORT}`)
})



