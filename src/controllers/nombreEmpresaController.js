const Empresa = require("../models/Empresa.js")

const registrarEmpresa = async (req, res) => {
  const { nombre, direccion, ciudad, rfc, tipo } = req.body
  const tipoEmpresa = ["Embarcador", "Distribuidor", "AgenciaAduanal"]

  if ([nombre, direccion, ciudad, rfc].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }
  try {
    const nombreExite = await Empresa.findOne({ nombre })

    if (nombreExite) {
      const error = new Error("Nombre de Empresa ya se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }
    if (!tipoEmpresa.includes(tipo)) {
      const error = new Error("Tipo de empresa no valido")
      return res.status(400).json({ msg: error.message })
    }

    const empresa = new Empresa(req.body)

    const empresaAlmacenada = await empresa.save()
    return res.json(empresaAlmacenada)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.find()

    if (empresas.length === 0) {
      const error = new Error("No hay Empresas por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(empresas)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}


const obtenerEmpresa = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }
  try {
    const empresa = await Empresa.findById(id);

    if (!empresa) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(empresa)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}


const editarEmpresa = async (req, res) => {
  const { nombre, direccion, ciudad, rfc, tipo } = req.body
  const { id } = req.params;
  const tipoEmpresa = ["Embarcador", "Distribuidor", "AgenciaAduanal"]

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  if ([nombre, direccion, ciudad, rfc].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  if (!tipoEmpresa.includes(tipo)) {
    const error = new Error("Tipo de empresa no valido")
    return res.status(400).json({ msg: error.message })
  }

  try {
    // const nombreExite = await Empresa.findOne({ nombre })

    // if (nombreExite) {
    //   const error = new Error("Nombre de Empaque ya Existe")
    //   return res.status(400).json({ msg: error.message })
    // }
    const empresa = await Empresa.findById(id);

    if (!empresa) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    empresa.nombre = req.body.nombre || empresa.nombre;
    empresa.direccion = req.body.direccion || empresa.direccion;
    empresa.ciudad = req.body.ciudad || empresa.ciudad;
    empresa.rfc = req.body.rfc || empresa.rfc;
    empresa.tipo = req.body.tipo || empresa.tipo;

    const empresaAlmacenada = await empresa.save()
    return res.json(empresaAlmacenada)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const eliminarEmpresa = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const empresa = await Empresa.findById(id);

    if (!empresa) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const nombreEmpresaEliminar = await empresa.deleteOne(empresa)
    return res.json(nombreEmpresaEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

module.exports = {
  registrarEmpresa,
  obtenerEmpresas,
  obtenerEmpresa,
  editarEmpresa,
  eliminarEmpresa,
}

