import { Router } from "express";
import { getMatches } from "../util/matchesUtil.js";

const router = Router();

router.get('/router', (req, res) => {
    res.send({ data: "router" });
});


router.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches });
});

router.get("/api/dogs", (req, res) => {
    const dogs = [];
    let count = 0;

    function getDog() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                dogs.push({
                    id: count,
                    imageURL: data.message,
                });
                count++;
                if (count < 5) {
                    getDog();
                } else {
                    res.send(dogs);
                }
            });
    }

    getDog(); // hent den første hund ...
});



export default router;