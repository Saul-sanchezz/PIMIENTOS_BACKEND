const Trailer = require("../models/Trailer.js")

const registrarTrailer = async (req, res) => {
  const { numeroEconomico, placas, marca, modelo } = req.body

  if ([numeroEconomico, placas, marca, modelo].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const numeroEconomicoExite = await Trailer.findOne({ numeroEconomico })

    if (numeroEconomicoExite) {
      const error = new Error("Numero economico ya se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const trailer = new Trailer(req.body)

    const trailerAlmacenado = await trailer.save()
    return res.json(trailerAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerTrailers = async (req, res) => {
  try {
    const trailer = await Trailer.find()

    if (trailer.length === 0) {
      const error = new Error("No hay trailers por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(trailer)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerTrailer = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const trailer = await Trailer.findById(id);

    if (!trailer) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(trailer)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}


const editarTrailer = async (req, res) => {
  const { id } = req.params;
  const { numeroEconomico, placas, marca, modelo } = req.body

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  if ([numeroEconomico, placas, marca, modelo].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    // const numeroEconomicoExite = await Trailer.findOne({ numeroEconomico })

    // if (numeroEconomicoExite) {
    //   const error = new Error("Numero economico ya registrado")
    //   return res.status(400).json({ msg: error.message })
    // }

    const trailer = await Trailer.findById(id);

    if (!trailer) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    trailer.numeroEconomico = req.body.numeroEconomico || trailer.numeroEconomico;
    trailer.placas = req.body.placas || trailer.placas;
    trailer.marca = req.body.marca || trailer.marca;
    trailer.modelo = req.body.modelo || trailer.modelo;

    const trailerAlmacenado = await trailer.save()
    return res.json(trailerAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const eliminarTrailer = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const trailer = await Trailer.findById(id);

    if (!trailer) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const trailerEliminar = await trailer.deleteOne(trailer)
    return res.json(trailerEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

module.exports = {
  registrarTrailer,
  obtenerTrailers,
  obtenerTrailer,
  editarTrailer,
  eliminarTrailer,
}

