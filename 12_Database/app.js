import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.json());

import exercisesRouter from './routers/exercisesRouter.js';
app.use(exercisesRouter);
import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);

// Multer code ...
import multer from 'multer';
const upload = multer({
    dest: './uploads'
}
);

app.post('/profile', (req, res) => {
    res.send({ data: "Image uploaded" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});