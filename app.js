import express from 'express';
import morgan from 'morgan';
import mainRouter from './routers/index.js';

//! Variable d'environnment
const { NODE_ENV, PORT } = process.env;

//! Web Server API
//? - Initialisation et configuration
const app = express();

//? - Middleware
// Afficher des traces (log) des requetes
app.use(morgan('tiny'));
// Traitement le body de la requete (JSON)
app.use(express.json());

//? Routing
app.use('/api', mainRouter);

//? Démarrage
app.listen(PORT, () => {
    console.log(`Web API is running on port ${PORT} (${NODE_ENV})`);
});
