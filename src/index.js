const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const mangaRoutes = require("./routes/comics");
const authRoutes = require("./routes/authentication")
const mongoose = require("mongoose");
require('dotenv').config();

// Middleware para analizar el cuerpo de las solicitudes
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// Gestión de las rutas utilizando el middleware
app.use("/api", mangaRoutes);
app.use("/api", authRoutes);
app.use(express.json());
// Conexión a la base de datos MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

// Conexión al puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
