import express from 'express'
import { genNumber, getNumber } from '../core/getNumber.js';

const router = express.Router()

router.post('/start', (_, res) => {
    genNumber(); // ⽤亂數產⽣⼀個猜數字的 number，存在 memory DB
    res.json({ msg: 'The game has started.' });
})

router.get('/guess', (req, res) => {
    // 去 (memory) DB 拿答案的數字
    const answer = getNumber(); 
    // ⽤ req.query.number 拿到前端輸入的數字
    const num = parseInt(req.query.number);
    console.log(num);

    // check if NOT a num or not in range [1,100]
    // 如果有問題 =>
    // res.status(406).send({ msg: 'Not a legal number.'}) 
    if (num > 100 || num < 1) {
        res.status(406).send({ msg: `"${num}" is not a legal number (1 - 100).`});
        return;
    }
    if (num === answer)
        res.status(200).json({ msg: 'Equal'});
    else if (num < answer)
        res.status(200).json({ msg: 'Bigger'});
    else if (num > answer)
        res.status(200).json({ msg: 'Smaller'});
})
    // 如果沒有問題，回傳 status
router.post('/restart', (_, res) => {
    genNumber(); // ⽤亂數產⽣⼀個猜數字的 number，存在 memory DB
    res.json({ msg: 'The game has restarted.' });
})

export default router;