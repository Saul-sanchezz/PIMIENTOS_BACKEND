const Envase = require("../models/Envase.js")

const registrarEnvase = async (req, res) => {
  const { nombre } = req.body

  if (nombre === "") {
    const error = new Error("Campo obligatorio")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const nombreExite = await Envase.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Envase ya se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const envase = new Envase(req.body)

    const envaseAlmacenado = await envase.save()
    return res.json(envaseAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerEnvases = async (req, res) => {
  try {
    const envases = await Envase.find()

    if (envases.length === 0) {
      const error = new Error("No hay envases por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(envases)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerEnvase = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const envase = await Envase.findById(id);

    if (!envase) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(envase)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}


const editarEnvase = async (req, res) => {
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
    const nombreExite = await Envase.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Envase ya se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const envase = await Envase.findById(id);

    if (!envase) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    envase.nombre = req.body.nombre || envase.nombre;

    const envaseAlmacenado = await envase.save()
    return res.json(envaseAlmacenado)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const eliminarEnvase = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }
  try {
    const envase = await Envase.findById(id);

    if (!envase) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const envaseEliminar = await envase.deleteOne(envase)
    return res.json(envaseEliminar)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}

module.exports = {
  registrarEnvase,
  obtenerEnvases,
  obtenerEnvase,
  editarEnvase,
  eliminarEnvase,
}


