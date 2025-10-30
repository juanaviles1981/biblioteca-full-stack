import express from 'express';
import { PORT } from './config.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en puerto ${PORT}`);
});
