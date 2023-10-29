"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _db = _interopRequireDefault(require("./config/db.js"));
var _usuarioRoutes = _interopRequireDefault(require("./routes/usuarioRoutes.js"));
var _manifiestoRoutes = _interopRequireDefault(require("./routes/manifiestoRoutes.js"));
var _tamanoRoutes = _interopRequireDefault(require("./routes/tamanoRoutes.js"));
var _cultivoRoutes = _interopRequireDefault(require("./routes/cultivoRoutes.js"));
var _marcaRoutes = _interopRequireDefault(require("./routes/marcaRoutes.js"));
var _envaseRoutes = _interopRequireDefault(require("./routes/envaseRoutes.js"));
var _expoManifiestoRoutes = _interopRequireDefault(require("./routes/expoManifiestoRoutes.js"));
var _nombreEmpresaRoutes = _interopRequireDefault(require("./routes/nombreEmpresaRoutes.js"));
var _lineaTransporteRoutes = _interopRequireDefault(require("./routes/lineaTransporteRoutes.js"));
var _choferRoutes = _interopRequireDefault(require("./routes/choferRoutes.js"));
var _trailerRoutes = _interopRequireDefault(require("./routes/trailerRoutes.js"));
var _cajaRoutes = _interopRequireDefault(require("./routes/cajaRoutes.js"));
var _pisoAnteriorRoutes = _interopRequireDefault(require("./routes/pisoAnteriorRoutes.js"));
var _pisoActualRoutes = _interopRequireDefault(require("./routes/pisoActualRoutes.js"));
var _palletRoutes = _interopRequireDefault(require("./routes/palletRoutes.js"));
var _productoInventarioRoutes = _interopRequireDefault(require("./routes/productoInventarioRoutes.js"));
var _reporteEmpaqueRoutes = _interopRequireDefault(require("./routes/reporteEmpaqueRoutes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const express = require("express");

const app = (0, _express.default)();
app.use(_express.default.json());
_dotenv.default.config();
(0, _db.default)();
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de cors"));
    }
  }
};
app.use((0, _cors.default)(corsOptions));
app.use("/", (req, res) => {
  res.json({
    "msg": "servidor corriendo..."
  });
});
app.use("/api/usuarios", _usuarioRoutes.default);
app.use("/api/nacional-manifiestos", _manifiestoRoutes.default);
app.use("/api/tamanos", _tamanoRoutes.default);
app.use("/api/cultivos", _cultivoRoutes.default);
app.use("/api/marcas", _marcaRoutes.default);
app.use("/api/envases", _envaseRoutes.default);
app.use("/api/expo-manifiestos", _expoManifiestoRoutes.default);
app.use("/api/empresas", _nombreEmpresaRoutes.default);
app.use("/api/linea-transportes", _lineaTransporteRoutes.default);
app.use("/api/choferes", _choferRoutes.default);
app.use("/api/trailers", _trailerRoutes.default);
app.use("/api/cajas", _cajaRoutes.default);
app.use("/api/piso-anterior", _pisoAnteriorRoutes.default);
app.use("/api/piso-actual", _pisoActualRoutes.default);
app.use("/api/pallets", _palletRoutes.default);
app.use("/api/inventario-productos", _productoInventarioRoutes.default);
app.use("/api/reportes-empaque", _reporteEmpaqueRoutes.default);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`database conectado en el puerto ${PORT}`);
});