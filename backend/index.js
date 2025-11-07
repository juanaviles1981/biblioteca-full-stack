import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

//Middleware para parsear el request JSON
app.use(express.json());

// Middleware cors 
app.use(cors());


// Ruta HOME
app.get("/", (req, res) => {
  console.log(req.path);
  return res.status(234).send("Servidor funcionando");
});

app.use("/books", booksRoute);

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
