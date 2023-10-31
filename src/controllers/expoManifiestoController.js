const ExpoManifiesto = require("../models/ExpoManifiesto.js")
const Empresa = require("../models/Empresa.js")
const Chofer = require("../models/Chofer.js")
const Trailer = require("../models/Trailer.js")
const Caja = require("../models/Caja.js")
const LineaTransporte = require("../models/LineaTransporte.js")
const Cultivo = require("../models/Cultivo.js")
const Tamano = require("../models/Tamano.js")
const Marca = require("../models/Marca.js")
const Envase = require("../models/Envase.js")

const registrarExpoManifiesto = async (req, res) => {
  const { nroManifiesto, listaProductos, } = req.body

  if (nroManifiesto.length < 2 || nroManifiesto.length > 3) {
    const error = new Error("Numero de manifiesto invalido")
    return res.status(400).json({ msg: error.message })
  }

  if (nroManifiesto === 0 || listaProductos === undefined || listaProductos.length === 0) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const expoManifiestoExite = await ExpoManifiesto.findOne({ nroManifiesto })

    if (expoManifiestoExite) {
      const error = new Error("Nro de Manifiesto ya se encuentra almacenado")
      return res.status(400).json({ msg: error.message })
    }

    const expoManifiesto = new ExpoManifiesto(req.body)

    const expoManifiestoAlmacenado = await expoManifiesto.save()
    return res.json(expoManifiestoAlmacenado)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerExpoManifiestos = async (req, res) => {
  try {
    const expoManifiestos = await ExpoManifiesto.find()

    if (expoManifiestos.length === 0) {
      const error = new Error("No hay manifiestos por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(expoManifiestos)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}


const obtenerExpoManifiesto = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const expoManifiesto = await ExpoManifiesto.findById(id).populate([
      "agenciaMx", "agenciaUsa", "caja", "chofer", "lineaTransporte", "nombreEmpaque", "trailer", "agenciaDestino"
    ])

    if (!expoManifiesto) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(expoManifiesto)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}


const editarExpoManifiesto = async (req, res) => {
  const { id } = req.params;
  const { nroManifiesto, listaProductos, } = req.body

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  if (nroManifiesto.length < 2 || nroManifiesto.length > 3) {
    const error = new Error("Numero de manifiesto invalido")
    return res.status(400).json({ msg: error.message })
  }

  if (nroManifiesto === 0 || listaProductos === undefined || listaProductos.length === 0) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const expoManifiesto = await ExpoManifiesto.findById(id);

    if (!expoManifiesto) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    expoManifiesto.nroManifiesto = req.body.nroManifiesto || expoManifiesto.nroManifiesto;
    expoManifiesto.nroPallets = req.body.nroPallets || expoManifiesto.nroPallets;
    expoManifiesto.fechaEmbarque = req.body.fechaEmbarque || expoManifiesto.fechaEmbarque;
    expoManifiesto.agregadoReporte = req.body.agregadoReporte;
    expoManifiesto.agenciaMx = req.body.agenciaMx || expoManifiesto.agenciaMx;
    expoManifiesto.agenciaUsa = req.body.agenciaUsa || expoManifiesto.agenciaUsa;
    expoManifiesto.nombreEmpaque = req.body.nombreEmpaque || expoManifiesto.nombreEmpaque;
    expoManifiesto.agenciaDestino = req.body.agenciaDestino || expoManifiesto.agenciaDestino;
    expoManifiesto.chofer = req.body.chofer || expoManifiesto.chofer;
    expoManifiesto.trailer = req.body.trailer || expoManifiesto.trailer;
    expoManifiesto.caja = req.body.caja || expoManifiesto.caja;
    expoManifiesto.lineaTransporte = req.body.lineaTransporte || expoManifiesto.lineaTransporte;
    expoManifiesto.listaProductos = req.body.listaProductos || expoManifiesto.listaProductos;

    const expoManifiestoAlmacenado = await expoManifiesto.save()
    return res.json(expoManifiestoAlmacenado)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const eliminarExpoManifiesto = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const expoManifiesto = await ExpoManifiesto.findById(id);

    if (!expoManifiesto) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const expoManifiestoEliminar = await expoManifiesto.deleteOne(expoManifiesto)
    return res.json(expoManifiestoEliminar)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerDetalles = async (req, res) => {

  try {
    const empresas = await Empresa.find({}, { id: true, nombre: true })
    const choferes = await Chofer.find({}, { id: true, nombre: true })
    const trailers = await Trailer.find({}, { id: true, numeroEconomico: true })
    const cajas = await Caja.find({}, { id: true, numeroEconomico: true })
    const lineaTransporte = await LineaTransporte.find({}, { id: true, nombre: true })
    const cultivos = await Cultivo.find({}, { id: true, nombre: true })
    const tamanos = await Tamano.find({}, { id: true, nombre: true })
    const marcas = await Marca.find({}, { id: true, nombre: true })
    const envases = await Envase.find({}, { id: true, nombre: true })
    return res.json({
      empresas,
      choferes,
      trailers,
      cajas,
      lineaTransporte,
      cultivos,
      tamanos,
      marcas,
      envases,
    })
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerManifiestosParaReporte = async (req, res) => {
  try {
    const manifiestosParaReporte = await ExpoManifiesto.find({ agregadoReporte: false })
    return res.json(manifiestosParaReporte)
  } catch (error) {
    res.status(500).send({ msg: "Ocurrio un error" });
  }
}

module.exports = {
  registrarExpoManifiesto,
  obtenerExpoManifiestos,
  obtenerExpoManifiesto,
  editarExpoManifiesto,
  eliminarExpoManifiesto,
  obtenerDetalles,
  obtenerManifiestosParaReporte,
}


