"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarReporteEmpaque = exports.obtenerReportesEmpaques = exports.obtenerReporteEmpaque = exports.eliminarReporteEmpaque = exports.editarReporteEmpaque = void 0;
var _ReporteEmpaque = _interopRequireDefault(require("../models/ReporteEmpaque.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registrarReporteEmpaque = async (req, res) => {
  const {
    datosCalculoEmpaqueTotal,
    totalDeEmpaque,
    totalDeEmpaquePorProducto,
    pisoActual
  } = req.body;

  // pendiente de borrar 
  // if (datosCalculoEmpaqueTotal.length === 0
  //   || totalDeEmpaque.length === 0 || totalDeEmpaquePorProducto.length === 0) {
  //   const error = new Error("Todos los campos son obligatorios")
  //   return res.status(400).json({ msg: error.message })
  // }

  try {
    const reporteEmpaque = new _ReporteEmpaque.default(req.body);
    const fecha = new Date();
    const formatearFecha = fecha => {
      const fechaNueva = new Date(fecha);
      const opciones = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      return fechaNueva.toLocaleDateString("es-ES", opciones);
    };
    const fechaArray = formatearFecha(fecha).split("/");
    const fechaFinal = `${fechaArray[2]}-${fechaArray[1]}-${fechaArray[0]}`;
    reporteEmpaque.fecha = fechaFinal;
    const reporteAlmacenado = await reporteEmpaque.save();
    return res.json(reporteAlmacenado);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.registrarReporteEmpaque = registrarReporteEmpaque;
const obtenerReportesEmpaques = async (req, res) => {
  try {
    const reportesEmpaque = await _ReporteEmpaque.default.find();
    if (reportesEmpaque.length === 0) {
      const error = new Error("No hay Reportes por mostrar");
      return res.status(400).json({
        msg: error.message
      });
    }
    return res.json(reportesEmpaque);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerReportesEmpaques = obtenerReportesEmpaques;
const obtenerReporteEmpaque = async (req, res) => {
  const {
    id
  } = req.params;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  try {
    const reporteEmpaque = await _ReporteEmpaque.default.findById(id);
    if (!reporteEmpaque) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    return res.json(reporteEmpaque);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};
exports.obtenerReporteEmpaque = obtenerReporteEmpaque;
const editarReporteEmpaque = async (req, res) => {
  const {
    id
  } = req.params;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  return res.json({
    msg: "Editando reporte"
  });
};
exports.editarReporteEmpaque = editarReporteEmpaque;
const eliminarReporteEmpaque = async (req, res) => {
  const {
    id
  } = req.params;
  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida");
    return res.status(404).json({
      msg: error.message
    });
  }
  try {
    const reporteEmpaque = await _ReporteEmpaque.default.findById(id);
    if (!reporteEmpaque) {
      const error = new Error("No Encontrado");
      return res.status(404).json({
        msg: error.message
      });
    }
    const reporteEmpaqueEliminar = await reporteEmpaque.deleteOne(reporteEmpaque);
    return res.json(reporteEmpaqueEliminar);
  } catch (error) {
    return res.status(500).send({
      msg: "Ocurrio un error"
    });
  }
};

// const buscarPorFecha = async (req, res) => {
//   const query = req.query
//   const { fecha } = query

//   try {
//     const reportesEmpaque = await EmpaqueReporte.find({ fecha: fecha })
//     return res.json(reportesEmpaque)
//   } catch (error) {
//     return res.status(500).send({ msg: "Ocurrio un error" });
//   }
// }
exports.eliminarReporteEmpaque = eliminarReporteEmpaque;