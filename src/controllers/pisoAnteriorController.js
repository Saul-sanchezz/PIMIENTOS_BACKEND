import PisoAnterior from "../models/PisoAnterior.js"

const registrarPisoAnterior = async (req, res) => {
  const { cantidadCajas, cultivo, tamano, marca, envase } = req.body

  if ([cantidadCajas, cultivo, tamano, marca, envase].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  const productoAgregar = new PisoAnterior(req.body)

  try {
    const productoAgregarAlmacenado = await productoAgregar.save()
    return res.json(productoAgregarAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerPisoAnteriorAll = async (req, res) => {
  try {
    const pisoAnterior = await PisoAnterior.find()

    // if (pisoAnterior.length === 0) {
    //   const error = new Error("No hay Productos por mostrar")
    //   return res.status(404).json({ msg: error.message });
    // }
    
    return res.json(pisoAnterior)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerPisoAnteriorId = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const producto = await PisoAnterior.findById(id);

    if (!producto) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(producto)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });

  }
}

const editarPisoAnteriorId = async (req, res) => {
  const { id } = req.params;
  const { cantidadCajas, cultivo, tamano, marca, envase } = req.body

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  if ([cantidadCajas, cultivo, tamano, marca, envase].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const producto = await PisoAnterior.findById(id);

    if (!producto) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    producto.cantidadCajas = req.body.cantidadCajas || producto.cantidadCajas;
    producto.cultivo = req.body.cultivo || producto.cultivo;
    producto.tamano = req.body.tamano || producto.tamano;
    producto.marca = req.body.marca || producto.marca;
    producto.envase = req.body.envase || producto.envase;

    const productoAlmacenado = await producto.save()
    return res.json(productoAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const eliminarPisoAnteriorId = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const producto = await PisoAnterior.findById(id);

    if (!producto) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const productoEliminar = await producto.deleteOne(producto)
    return res.json(productoEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

export {
  registrarPisoAnterior,
  obtenerPisoAnteriorAll,
  obtenerPisoAnteriorId,
  editarPisoAnteriorId,
  eliminarPisoAnteriorId,
}

