const Chofer = require("../models/Chofer.js")

const registrarChofer = async (req, res) => {
  const { nombre, licencia } = req.body

  if ([nombre, licencia].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const nombreExite = await Chofer.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Chofer ya se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const chofer = new Chofer(req.body)

    const choferAlmacenado = await chofer.save()
    return res.json(choferAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerChoferes = async (req, res) => {
  try {
    const choferes = await Chofer.find()

    if (choferes.length === 0) {
      const error = new Error("No hay Choferes por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(choferes)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}


const obtenerChofer = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }
  try {
    const chofer = await Chofer.findById(id);

    if (!chofer) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(chofer)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const editarChofer = async (req, res) => {
  const { id } = req.params;
  const { nombre, licencia } = req.body

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  if ([nombre, licencia].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    // const nombreExite = await Chofer.findOne({ nombre })

    // if (nombreExite) {
    //   const error = new Error("Chofer ya se encuentra almacenado")
    //   return res.status(400).json({ msg: error.message })
    // }

    const chofer = await Chofer.findById(id);

    if (!chofer) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    chofer.nombre = req.body.nombre || chofer.nombre;
    chofer.licencia = req.body.licencia || chofer.licencia;

    const choferAlmacenado = await chofer.save()
    return res.json(choferAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const eliminarChofer = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const chofer = await Chofer.findById(id);

    if (!chofer) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const choferEliminar = await chofer.deleteOne(chofer)
    return res.json(choferEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

module.exports = {
  registrarChofer,
  obtenerChoferes,
  obtenerChofer,
  editarChofer,
  eliminarChofer,
}

