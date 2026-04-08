const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas conectado"))
  .catch(err => console.log(err));

// Rutas
app.use("/productos", require("./routes/productos"));

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});