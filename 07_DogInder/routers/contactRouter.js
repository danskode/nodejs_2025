import { Router } from "express";
const router = Router();

router.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.send({ data: "Message recieved!" });
});

export default router;