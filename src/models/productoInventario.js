import mongoose from "mongoose";

const productoInventarioSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    marca: {
      type: String,
      require: true,
      trim: true,
      uppercase: true
    },
    cantidad: {
      type: Number,
      require: true,
      default: 0
    },
  }, 
  {
    timestamps: true
  },
)

const ProductoInventario = mongoose.model("ProductoInventario", productoInventarioSchema)

export default ProductoInventario