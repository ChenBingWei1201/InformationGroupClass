// 實現 ScoreCard 的 RESTful APIs
import { Router } from "express";
import ScoreCard from "../models/ScoreCard";
const router = Router();
router.delete("/cards", (_, res) => {
    res.json({ msg: 'The game has started.' });
});
router.post("/card", (_, res) => {
    res.json({ msg: 'The game has started.' });
});
router.get("/cards", (_, res) => {
    res.json({ msg: 'The game has started.' });
});
export default router;