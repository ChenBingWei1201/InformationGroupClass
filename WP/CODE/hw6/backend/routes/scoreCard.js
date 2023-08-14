// 實現 ScoreCard 的 RESTful APIs
import { Router } from "express";
import ScoreCard from "../models/ScoreCard";

const router = Router();
// delete todo: delete data in db
router.delete("/cards", (_, res) => {
    res.status(200).json({ message: 'Database cleared.' });
});
// post todo: store data into db
router.post("/card", (req, res) => {
    const { name, subject, score } = req.body.message;
    const existing = ScoreCard.findOne({ name, subject });
    if (existing)
        res.status(200).json({ msg: `Updating (${name}, ${subject}, ${score}).`, card: true });
    else 
        res.status(200).json({ msg: `Adding (${name}, ${subject}, ${score}).`, card: true });
});
// query specific data from db
router.get("/cards", (req, res) => {
    const { type, queryString } = req.query;

    res.json({ msg: 'The game has started.' });
});

export default router;