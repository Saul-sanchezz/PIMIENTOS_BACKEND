import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import conectarDB from "./src/config/db.js"
import usuarioRoutes from "./src/routes/usuarioRoutes.js"
import manifiestoRoutes from "./src/routes/manifiestoRoutes.js"
import tamanoRoutes from "./src/routes/tamanoRoutes.js"
import cultivoRoutes from "./src/routes/cultivoRoutes.js"
import marcaRoutes from "./src/routes/marcaRoutes.js"
import envaseRoutes from "./src/routes/envaseRoutes.js"
import expoManifiestoRotes from "./src/routes/expoManifiestoRoutes.js"
import nombreEmpresaRoutes from "./src/routes/nombreEmpresaRoutes.js"
import lineaTransporteRoutes from "./src/routes/lineaTransporteRoutes.js"
import choferRoutes from "./src/routes/choferRoutes.js"
import trailerRoutes from "./src/routes/trailerRoutes.js"
import cajaRoutes from "./src/routes/cajaRoutes.js"
import pisoAnteriorRoutes from "./src/routes/pisoAnteriorRoutes.js"
import pisoActualRoutes from "./src/routes/pisoActualRoutes.js"
import palletRoutes from "./src/routes/palletRoutes.js"
import productoInventarioRoutes from "./src/routes/productoInventarioRoutes.js"
import reporteEmpaqueRoutes from "./src/routes/reporteEmpaqueRoutes.js"

const app = express()
app.use(express.json())

dotenv.config()

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

app.use("/", (req, res) => {
  res.json({"msg": "servidor corriendo..."})
})
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
  console.log(`database conectado en el puerto ${PORT}`)
})



