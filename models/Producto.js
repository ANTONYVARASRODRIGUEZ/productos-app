const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  categoria: { 
    type: String, 
    enum: ["Electrónica", "Ropa", "Alimentos"], 
    required: true 
  }
});

module.exports = mongoose.model("Producto", productoSchema);