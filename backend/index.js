import express from 'express';
import { PORT , mongoDBURL } from './config.js';
import mongoose from 'mongoose';
const app = express();

app.get('/', (req, res) => {
    console.log(res)
    return res.status(234).send('Servidor funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en puerto ${PORT}`);
});

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('Conexión a la base de datos exitosa');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});