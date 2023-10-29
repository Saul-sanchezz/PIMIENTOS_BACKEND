import EmpaqueReporte from "../models/ReporteEmpaque.js"

const registrarReporteEmpaque = async (req, res) => {
  const { datosCalculoEmpaqueTotal, totalDeEmpaque, totalDeEmpaquePorProducto, pisoActual } = req.body

  // pendiente de borrar 
  // if (datosCalculoEmpaqueTotal.length === 0
  //   || totalDeEmpaque.length === 0 || totalDeEmpaquePorProducto.length === 0) {
  //   const error = new Error("Todos los campos son obligatorios")
  //   return res.status(400).json({ msg: error.message })
  // }

  try {
    const reporteEmpaque = new EmpaqueReporte(req.body)

    const fecha = new Date()
    const formatearFecha = fecha => {
      const fechaNueva = new Date(fecha);
      const opciones = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
      return fechaNueva.toLocaleDateString("es-ES", opciones)
    }
    const fechaArray = formatearFecha(fecha).split("/")
    const fechaFinal = `${fechaArray[2]}-${fechaArray[1]}-${fechaArray[0]}`

    reporteEmpaque.fecha = fechaFinal

    const reporteAlmacenado = await reporteEmpaque.save()
    return res.json(reporteAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerReportesEmpaques = async (req, res) => {
  try {
    const reportesEmpaque = await EmpaqueReporte.find()

    if (reportesEmpaque.length === 0) {
      const error = new Error("No hay Reportes por mostrar")
      return res.status(400).json({ msg: error.message });
    }
    return res.json(reportesEmpaque)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerReporteEmpaque = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const reporteEmpaque = await EmpaqueReporte.findById(id);

    if (!reporteEmpaque) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(reporteEmpaque)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const editarReporteEmpaque = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }
  return res.json({ msg: "Editando reporte" });
}

const eliminarReporteEmpaque = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const reporteEmpaque = await EmpaqueReporte.findById(id);

    if (!reporteEmpaque) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const reporteEmpaqueEliminar = await reporteEmpaque.deleteOne(reporteEmpaque)
    return res.json(reporteEmpaqueEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

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

export {
  registrarReporteEmpaque,
  obtenerReportesEmpaques,
  obtenerReporteEmpaque,
  editarReporteEmpaque,
  eliminarReporteEmpaque,
}

