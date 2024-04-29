const mongoose = require("mongoose");

const mangaSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  añoPublicacion: {
    type: Number,
    required: true,
  },
  editorial: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  numeroVolumes: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Manga", mangaSchema);
