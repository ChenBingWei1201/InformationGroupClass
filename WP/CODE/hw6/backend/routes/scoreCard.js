// 實現 ScoreCard 的 RESTful APIs
import { Router } from "express";
import ScoreCard from "../models/ScoreCard.js";
import { deleteDB, addUser, updateScore } from "../resolver/mutation.js";

const router = Router();

router.delete("/cards", (_, res) => {
    deleteDB();
    res.status(200).json({ message: 'Database cleared.' });
});

// post todo: store data into db
router.post("/card", (req, res) => {
    const { name, subject, score } = req.body;
    const existing = ScoreCard.findOne({name}); // It's non-sense!
    console.log("--------------------------------------------");
    console.log(existing);
    console.log("--------------------------------------------");

    if (existing) {
        throw new Error(`data ${name} exists!!`);
        // updateScore(name, subject, score);
        // res.status(200).json({ message: `Updating (${name}, ${subject}, ${score}).`, card: true });
    }
    else {
        addUser(name, subject, score);
        res.status(200).json({ message: `Adding (${name}, ${subject}, ${score}).`, card: true });
    }
});

// query specific data from db
router.get("/cards", (req, res) => {
    console.log(ScoreCard.find());
});

export default router;