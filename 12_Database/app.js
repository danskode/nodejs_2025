import express from 'express';

const app = express();

app.use(express.json);

import exercisesRouter from './routers/exercisesRouter.js';
app.use(exercisesRouter);

import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});