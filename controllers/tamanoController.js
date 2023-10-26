import Tamano from "../models/Tamano.js"

const registrarTamano = async (req, res) => {
  const { nombre } = req.body

  if (nombre === "") {
    const error = new Error("Campo obligatorio")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const nombreExite = await Tamano.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Tamaño ya se encuentra Almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const tamano = new Tamano(req.body)

    const tamanoAlmacenado = await tamano.save()
    return res.json(tamanoAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerTamanos = async (req, res) => {
  try {
    const tamanos = await Tamano.find()

    if (tamanos.length === 0) {
      const error = new Error("No hay tamaños por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(tamanos)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerTamano = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }
  try {
    const tamano = await Tamano.findById(id);

    if (!tamano) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(tamano)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}


const editarTamano = async (req, res) => {
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
    const nombreExite = await Tamano.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Nombre de tamaño se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const tamano = await Tamano.findById(id);

    if (!tamano) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    tamano.nombre = req.body.nombre || tamano.nombre;

    const tamanoAlmacenado = await tamano.save()
    return res.json(tamanoAlmacenado)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const eliminarTamano = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const tamano = await Tamano.findById(id);

    if (!tamano) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const tamanoEliminar = await tamano.deleteOne(tamano)
    return res.json(tamanoEliminar)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" })
  }
}

export {
  registrarTamano,
  obtenerTamanos,
  obtenerTamano,
  editarTamano,
  eliminarTamano,
}

