import { Router } from "express";
import db from '../database/connection.js';

const router = Router();

router.post('/api/users', async (req, res) => {

    // const result = db.run('INSERT INTO users (username, role) VALUES (?, ?);', 
    //    [req.body.username, req.body.role]);

    const { username, role } = req.body;
    const { lastID } = await db.run('INSERT INTO users (username, role) VALUES (?, ?);', [username, role]);
    res.send({ data: { createdId: lastID } });

})

export default router;