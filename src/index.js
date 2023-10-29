const express = require("express");
// import express from "express"
// import dotenv from "dotenv"
// import cors from "cors"
// import conectarDB from "./config/db.js"
const conectarDB = require("./config/db.js")
// import usuarioRoutes from "./routes/usuarioRoutes.js"
const usuarioRoutes = require("./routes/usuarioRoutes.js")
// import manifiestoRoutes from "./routes/manifiestoRoutes.js"
// import tamanoRoutes from "./routes/tamanoRoutes.js"
// import cultivoRoutes from "./routes/cultivoRoutes.js"
// import marcaRoutes from "./routes/marcaRoutes.js"
// import envaseRoutes from "./routes/envaseRoutes.js"
// import expoManifiestoRotes from "./routes/expoManifiestoRoutes.js"
// import nombreEmpresaRoutes from "./routes/nombreEmpresaRoutes.js"
// import lineaTransporteRoutes from "./routes/lineaTransporteRoutes.js"
// import choferRoutes from "./routes/choferRoutes.js"
// import trailerRoutes from "./routes/trailerRoutes.js"
// import cajaRoutes from "./routes/cajaRoutes.js"
// import pisoAnteriorRoutes from "./routes/pisoAnteriorRoutes.js"
// import pisoActualRoutes from "./routes/pisoActualRoutes.js"
// import palletRoutes from "./routes/palletRoutes.js"
// import productoInventarioRoutes from "./routes/productoInventarioRoutes.js"
// import reporteEmpaqueRoutes from "./routes/reporteEmpaqueRoutes.js"

const app = express()
app.use(express.json())

// dotenv.config()

conectarDB()

// const whitelist = [
//   process.env.FRONTEND_URL,
// ]

// const corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error("Error de cors"))
//     }
//   }
// }

// app.use(cors(corsOptions))

// app.use("/", (req, res) => {
//   res.json({"msg": "servidor corriendo..."})
// })
app.use("/api/usuarios", usuarioRoutes)
// app.use("/api/nacional-manifiestos", manifiestoRoutes)
// app.use("/api/tamanos", tamanoRoutes)
// app.use("/api/cultivos", cultivoRoutes)
// app.use("/api/marcas", marcaRoutes)
// app.use("/api/envases", envaseRoutes)
// app.use("/api/expo-manifiestos", expoManifiestoRotes)
// app.use("/api/empresas", nombreEmpresaRoutes)
// app.use("/api/linea-transportes", lineaTransporteRoutes)
// app.use("/api/choferes", choferRoutes)
// app.use("/api/trailers", trailerRoutes)
// app.use("/api/cajas", cajaRoutes)
// app.use("/api/piso-anterior", pisoAnteriorRoutes)
// app.use("/api/piso-actual", pisoActualRoutes)
// app.use("/api/pallets", palletRoutes)
// app.use("/api/inventario-productos", productoInventarioRoutes)
// app.use("/api/reportes-empaque", reporteEmpaqueRoutes)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`database conectado en el puerto ${PORT}`)
})



