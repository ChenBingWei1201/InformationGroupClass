// 定義 Express/Router middleware, 作為與前端串接的 API endpoint
import { Router } from 'express';
import ScoreCardRouter from './scoreCard.js';
const router = Router();
router.use('/', ScoreCardRouter);
export default router;