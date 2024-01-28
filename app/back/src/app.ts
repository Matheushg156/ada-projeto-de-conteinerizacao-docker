import express from 'express';

import animeListRouter from './routes/animeListRoute';


const app = express();

app.use(express.json());

app.use('/anime-list', animeListRouter);

export default app;
