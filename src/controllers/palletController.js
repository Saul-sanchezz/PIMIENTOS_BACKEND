import Pallet from "../models/Pallet.js"
import Cultivo from "../models/Cultivo.js"
import Marca from "../models/Marca.js"
import Tamano from "../models/Tamano.js"
import Envase from "../models/Envase.js"
import ProductoInventario from "../models/productoInventario.js"

//cultivos
const BELL_PEPPER = "BELL PEPPER"
const RED_BELL_PEPPER = "RED BELL PEPPER"
const LAROUGE = "LAROUGE"
const BLOCKY = "BLOCKY"
const PICKLE = "PICKLE"
const ACORN = "ACORN"
const BUTTERNUT = "BUTTERNUT"
const KABOCHA = "KABOCHA"
const SPAGHETTI = "SPAGHETTI"
// productos inventario
const PALLETS = "PALLETS"
const BOLSA_3_PACK = "BOLSA 3 PACK"
const BOLSA_PLASTICO_PICKLE = "BOLSA DE PLASTICO PARA PICKLE"
const ENV_1_BUSHEL_CAJA_NEGRA = "1 BUSHEL CAJA NEGRA"
const BINS_CARTON_PICKLE = "BINS CARTON PICKLE"
// envases
const ENV_1 = "1 1/9"
const CANTIDAD_ENV_1 = 56
const RPC_6425 = "RPC 6425"
const CANTIDAD_RPC_6425 = 40
const RPC_6423 = "RPC 6423"
const CANTIDAD_RPC_6423 = 45
const ENV_5_LBS = "5 LBS"
const CANTIDAD_ENV_5_LBS = 168
const EURO = "EURO"
const CANTIDAD_EURO = 50
const ENV_3_PACK = "3 PACK"
const CANTIDAD_ENV_3_PACK = 50
const CANTIDAD_BOLSAS_POR_CAJA = 16
const ENV_11_LBS = "11 LBS"
const CANTIDAD_ENV_11_LBS = 90
const ENV_15_LBS = "15 LBS"
const CANTIDAD_ENV_15_LBS = 77
const ENV_1_BUSHEL = "1 BUSHEL"
const CANTIDAD_ENV_1_BUSHEL_PICKLE = 56
const CANTIDAD_BOLSA_PLASTICO_PICKLE = 56
const BINS_CARTON = "BINS CARTON"
const CANTIDAD_BINS_CARTON_PICKLE = 1
const ENV_1_BL = "1 BL"
const CANTIDAD_1_BL = 56
const BINS_MADERA = "BINS MADERA"
const CANTIDAD_BINS_MADERA = 1  
// marcas 
const FRESH_FARMS = "FRESH FARMS"
const MARKON = "MARKON"
const GENERICO = "GENERICO"


const almacenarDatosInventarioRegistrar = async pallet => {
  if (pallet?.cultivo === BELL_PEPPER) {
    if (pallet?.envase === ENV_1 && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_1 && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === RPC_6423) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_RPC_6423)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === RPC_6425) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_RPC_6425)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_5_LBS && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_5_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === EURO && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_EURO)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_3_PACK && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: EURO, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_3_PACK)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
      const bolsas3Pack = await ProductoInventario.findOne({ nombre: BOLSA_3_PACK })
      bolsas3Pack.cantidad = bolsas3Pack.cantidad - (pallet?.cantidad * CANTIDAD_ENV_3_PACK * CANTIDAD_BOLSAS_POR_CAJA)
      await bolsas3Pack.save();
    }
  }
  if (pallet?.cultivo === RED_BELL_PEPPER ||
    pallet?.cultivo === LAROUGE ||
    pallet?.cultivo === BLOCKY) {
    if (pallet?.envase === ENV_1 && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_1 && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_5_LBS && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_5_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_11_LBS && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_11_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_15_LBS && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_15_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
  }
  if (pallet?.cultivo === PICKLE) {
    if (pallet?.envase === ENV_1_BUSHEL && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: ENV_1_BUSHEL_CAJA_NEGRA });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_ENV_1_BUSHEL_PICKLE)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
      const bolsaPickle = await ProductoInventario.findOne({ nombre: BOLSA_PLASTICO_PICKLE })
      bolsaPickle.cantidad = bolsaPickle.cantidad - (pallet?.cantidad * CANTIDAD_BOLSA_PLASTICO_PICKLE)
      await bolsaPickle.save()
    }
    if (pallet?.envase === BINS_CARTON && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: BINS_CARTON_PICKLE });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_BINS_CARTON_PICKLE)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
  }
  if (pallet?.cultivo === ACORN ||
    pallet?.cultivo === BUTTERNUT ||
    pallet?.cultivo === KABOCHA ||
    pallet?.cultivo === SPAGHETTI
  ) {
    if (pallet?.envase === ENV_1_BL && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_1_BL)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_1_BL && pallet?.marca === GENERICO) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_1_BL)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad - pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === BINS_MADERA) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase });
      productoInventario.cantidad = productoInventario.cantidad - (pallet?.cantidad * CANTIDAD_BINS_MADERA)
      await productoInventario.save();
    }
  }
}

const almacenarDatosInventarioEliminar = async pallet => {
  if (pallet?.cultivo === BELL_PEPPER) {
    if (pallet?.envase === ENV_1 && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_1 && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === RPC_6423) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_RPC_6423)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === RPC_6425) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_RPC_6425)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_5_LBS && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_5_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === EURO && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_EURO)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_3_PACK && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: EURO, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_3_PACK)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
      const bolsas3Pack = await ProductoInventario.findOne({ nombre: BOLSA_3_PACK })
      bolsas3Pack.cantidad = bolsas3Pack.cantidad + (pallet?.cantidad * CANTIDAD_ENV_3_PACK * CANTIDAD_BOLSAS_POR_CAJA)
      await bolsas3Pack.save();
    }
  }
  if (pallet?.cultivo === RED_BELL_PEPPER ||
    pallet?.cultivo === LAROUGE ||
    pallet?.cultivo === BLOCKY) {
    if (pallet?.envase === ENV_1 && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_1 && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_1)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_5_LBS && pallet?.marca === MARKON) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_5_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_11_LBS && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_11_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_15_LBS && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_15_LBS)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
  }
  if (pallet?.cultivo === PICKLE) {
    if (pallet?.envase === ENV_1_BUSHEL && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: ENV_1_BUSHEL_CAJA_NEGRA });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_ENV_1_BUSHEL_PICKLE)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
      const bolsaPickle = await ProductoInventario.findOne({ nombre: BOLSA_PLASTICO_PICKLE })
      bolsaPickle.cantidad = bolsaPickle.cantidad + (pallet?.cantidad * CANTIDAD_BOLSA_PLASTICO_PICKLE)
      await bolsaPickle.save()
    }
    if (pallet?.envase === BINS_CARTON && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: BINS_CARTON_PICKLE });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_BINS_CARTON_PICKLE)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
  }
  if (pallet?.cultivo === ACORN ||
    pallet?.cultivo === BUTTERNUT ||
    pallet?.cultivo === KABOCHA ||
    pallet?.cultivo === SPAGHETTI
  ) {
    if (pallet?.envase === ENV_1_BL && pallet?.marca === FRESH_FARMS) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_1_BL)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === ENV_1_BL && pallet?.marca === GENERICO) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase, marca: pallet?.marca });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_1_BL)
      await productoInventario.save();
      const palletsInventario = await ProductoInventario.findOne({ nombre: PALLETS })
      palletsInventario.cantidad = palletsInventario.cantidad + pallet?.cantidad
      await palletsInventario.save();
    }
    if (pallet?.envase === BINS_MADERA) {
      const productoInventario = await ProductoInventario.findOne({ nombre: pallet?.envase });
      productoInventario.cantidad = productoInventario.cantidad + (pallet?.cantidad * CANTIDAD_BINS_MADERA)
      await productoInventario.save();
    }
  }
}

const registrarPallet = async (req, res) => {
  const { cultivo, tamano, marca, envase, cantidad } = req.body

  if ([cultivo, tamano, marca, envase, cantidad].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const pallet = new Pallet(req.body)

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

    pallet.creado = fechaFinal

    const palletAlmacenada = await pallet.save()

    await almacenarDatosInventarioRegistrar(palletAlmacenada)

    return res.json(palletAlmacenada)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerPallets = async (req, res) => {
  try {
    const pallets = await Pallet.find()

    if (pallets.length === 0) {
      const error = new Error("No hay Pallets por mostrar")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(pallets)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}


const obtenerPallet = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const pallet = await Pallet.findById(id);

    if (!pallet) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(pallet)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });

  }
}


const editarPallet = async (req, res) => {
  const { id } = req.params;
  const { cultivo, tamano, marca, envase, cantidad } = req.body

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  if ([cultivo, tamano, marca, envase, cantidad].includes("")) {
    const error = new Error("Todos los campos son obligatorios")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const pallet = await Pallet.findById(id);

    if (!pallet) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    await almacenarDatosInventarioEliminar(pallet)

    pallet.cultivo = req.body.cultivo || pallet.cultivo;
    pallet.tamano = req.body.tamano || pallet.tamano;
    pallet.marca = req.body.marca || pallet.marca;
    pallet.envase = req.body.envase || pallet.envase;
    pallet.cantidad = req.body.cantidad || pallet.cantidad;

    const palletAlmacenada = await pallet.save()

    await almacenarDatosInventarioRegistrar(palletAlmacenada)

    return res.json(palletAlmacenada)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const eliminarPallet = async (req, res) => {
  const { id } = req.params;

  if (id.length > 24 || id.length < 24) {
    const error = new Error("Id no valida")
    return res.status(404).json({ msg: error.message });
  }

  try {
    const pallet = await Pallet.findById(id);

    if (!pallet) {
      const error = new Error("No Encontrado")
      return res.status(404).json({ msg: error.message });
    }

    const palletEliminar = await pallet.deleteOne(pallet)

    await almacenarDatosInventarioEliminar(palletEliminar)

    return res.json(palletEliminar)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const obtenerDetalles = async (req, res) => {

  try {
    const cultivos = await Cultivo.find({}, { id: true, nombre: true })
    const tamanos = await Tamano.find({}, { id: true, nombre: true })
    const marcas = await Marca.find({}, { id: true, nombre: true })
    const envases = await Envase.find({}, { id: true, nombre: true })
    return res.json({
      cultivos,
      tamanos,
      marcas,
      envases,
    })
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

const buscarPorFecha = async (req, res) => {
  const query = req.query
  const { fecha } = query

  try {
    const pallets = await Pallet.find({ creado: fecha })
    // if (pallets.length === 0) {
    //   const error = new Error("No hay Pallets por mostrar")
    //   return res.status(404).json({ msg: error.message });
    // }
    return res.json(pallets)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" });
  }
}

export {
  registrarPallet,
  obtenerPallets,
  obtenerPallet,
  editarPallet,
  eliminarPallet,
  obtenerDetalles,
  buscarPorFecha,
}

