// 實現 ScoreCard 的 RESTful APIs
import { Router } from "express";
import ScoreCard from "../models/ScoreCard.js";
import { deleteDB, addUser, updateScore, queryData } from "../resolver/mutation.js";

const router = Router();

// delete data in db
router.delete("/cards", async (_, res) => {
    await deleteDB();
    res.status(200).json({ message: 'Database cleared.' });
});

// store data into db
router.post("/card", async (req, res) => {
    const { name, subject, score } = req.body;
    const existing = await ScoreCard.findOne({name, subject});

    if (existing) {
        await updateScore(name, subject, score);
        res.status(200).json({ message: `Updating (${name}, ${subject}, ${score}).`, card: true });
    }
    else {
        await addUser(name, subject, score);
        res.status(200).json({ message: `Adding (${name}, ${subject}, ${score}).`, card: true });
    }
});

// query specific data from db
router.get("/cards", async (req, res) => {
    const { type, queryString } = req.query;

    const existing = await queryData(type, queryString);
    if (existing.length === 0) 
        res.json({ message: `${type} (${queryString}) not found!` });
    else
        res.status(200).json({ 
            messages: 
                existing.map((scoreCard) => {
                    return `Found card with ${type}: (${scoreCard.name}, ${scoreCard.subject}, ${scoreCard.score})`
                })});
});

export default router;