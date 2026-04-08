const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");

// CREAR
router.post("/", async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// LISTAR
router.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

// OBTENER UNO
router.get("/:id", async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: "No encontrado" });
    res.json(producto);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
});

// ACTUALIZAR
router.put("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ELIMINAR
router.delete("/:id", async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Producto eliminado" });
  } catch {
    res.status(404).json({ error: "No encontrado" });
  }
});

module.exports = router;