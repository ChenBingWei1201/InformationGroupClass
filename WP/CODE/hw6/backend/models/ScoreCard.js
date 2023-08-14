// 定義 ScoreCard DB schema, 並且建立⼀個 ScoreCard model
import mongoose from 'mongoose';

const ScoreCardSchema = new mongoose.Schema({
    name: String,
    subject: String,
    score: Number
})

const ScoreCard = mongoose.model('ScoreCard',ScoreCardSchema);
export default ScoreCard;