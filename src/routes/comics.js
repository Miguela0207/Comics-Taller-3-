const express = require("express");
const router = express.Router();
const mangaSchema = require("../models/comics");
const verifyToken = require('./validate_token');

// Nuevo manga
router.post("/mangas", verifyToken, (req, res) => {
    const manga = mangaSchema(req.body);
    manga
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Consultar todos los mangas
router.get("/mangas", (req, res) => {
    mangaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Consultar un manga por su id
router.get("/mangas/:id", (req, res) => {
    const { id } = req.params;
    mangaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Modificar el nombre de un manga por su id
router.put("/mangas/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, autor, genero, añoPublicacion, editorial, estado, numeroVolumes } = req.body;
    mangaSchema
        .updateOne({ _id: id }, {
            $set: { titulo, autor, genero, añoPublicacion, editorial, estado, numeroVolumes }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Eliminar un manga por su id

router.delete("/mangas/:id", (req, res) => {
    const { id } = req.params;
    mangaSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
