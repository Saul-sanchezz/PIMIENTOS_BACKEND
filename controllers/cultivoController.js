import Cultivo from "../models/Cultivo.js"

const registrarCultivo = async (req, res) => {
  const { nombre } = req.body

  if (nombre === "") {
    const error = new Error("Campo obligatorio")
    return res.status(400).json({ msg: error.message })
  }

  const nombreExite = await Cultivo.findOne({ nombre })

  if (nombreExite) {
    const error = new Error("Cultivo ya se encuentra almacenado")
    return res.status(400).json({ msg: error.message })
  }

  const cultivo = new Cultivo(req.body)

  try {
    const cultivoAlmacenado = await cultivo.save()
    return res.json(cultivoAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerCultivos = async (req, res) => {
  try {
    const cultivos = await Cultivo.find()
    if (cultivos.length === 0) {
      const error = new Error("No hay Cultivos por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(cultivos)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}


const obtenerCultivo = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }
  try {
    const cultivo = await Cultivo.findById(id);

    if (!cultivo) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(cultivo)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}


const editarCultivo = async (req, res) => {
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
    const nombreExite = await Cultivo.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Cultivo ya se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const cultivo = await Cultivo.findById(id);

    if (!cultivo) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    cultivo.nombre = req.body.nombre || cultivo.nombre;

    const cultivoAlmacenado = await cultivo.save()
    return res.json(cultivoAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const eliminarCultivo = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const cultivo = await Cultivo.findById(id);

    if (!cultivo) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const cultivoEliminar = await cultivo.deleteOne(cultivo)
    return res.json(cultivoEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

export {
  registrarCultivo,
  obtenerCultivos,
  obtenerCultivo,
  editarCultivo,
  eliminarCultivo,
}

