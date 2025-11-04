import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

//Middleware para parsear JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  console.log(req.path);
  return res.status(234).send("Servidor funcionando");
});

// Ruta guardar libro
app.post("/books", async (req, res) => {
 try {
    if (
        !req.body.title || 
        !req.body.author || 
        !req.body.publishYear) {
            return res.status(400).send({message: "Faltan datos obligatorios"});
        };

    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    };  

    const book = await Book.create(newBook)
    return res.status(201).send(book);

    
 } catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message});
 }
})

// Obtener todos los libros
app.get("/books", async (req, res) => {
    try {
        const books =  await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message}); 
    }});

//Conexión a la base de datos
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });


  app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en puerto ${PORT}`);
});
