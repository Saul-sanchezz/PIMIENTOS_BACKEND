const LineaTransporte = require("../models/LineaTransporte.js");

const registrarLineaTransporte = async (req, res) => {
  const { nombre } = req.body

  if (nombre === "") {
    const error = new Error("Campo obligatorio")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const nombreExite = await LineaTransporte.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Linea de Transporte ya se encuentra almacenada")
      return res.status(400).json({ msg: error.message })
    }

    const lineaTransporte = new LineaTransporte(req.body)

    const lineaTransporteAlmacenada = await lineaTransporte.save()
    return res.json(lineaTransporteAlmacenada)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerLineaTransportes = async (req, res) => {
  try {
    const lineaTransportes = await LineaTransporte.find()

    if (lineaTransportes.length === 0) {
      const error = new Error("No hay Lineas de transportes por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(lineaTransportes)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}


const obtenerLineaTransporte = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }
  try {
    const lineaTransporte = await LineaTransporte.findById(id);

    if (!lineaTransporte) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(lineaTransporte)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const editarLineaTransporte = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  if (nombre === "") {
    const error = new Error("Campo obligatorio")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const nombreExite = await LineaTransporte.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Linea de Transporte ya se encuentra almacenada")
      return res.status(400).json({ msg: error.message })
    }

    const lineaTransporte = await LineaTransporte.findById(id);

    if (!lineaTransporte) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    lineaTransporte.nombre = req.body.nombre || lineaTransporte.nombre;

    const lineaTranporteAlmacenada = await lineaTransporte.save()
    res.json(lineaTranporteAlmacenada)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const eliminarLineaTransporte = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const lineaTransporte = await LineaTransporte.findById(id);

    if (!lineaTransporte) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const lineaTransporteEliminar = await lineaTransporte.deleteOne(lineaTransporte)
    return res.json(lineaTransporteEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

module.exports = {
  registrarLineaTransporte,
  obtenerLineaTransportes,
  obtenerLineaTransporte,
  editarLineaTransporte,
  eliminarLineaTransporte,
}

