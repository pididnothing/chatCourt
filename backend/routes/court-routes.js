import express from 'express';
import { createCourtRoom, sendMsg } from '../controllers/court-cont.js';
import { protectMsg } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/create-court-room', createCourtRoom);

router.post('/send-msg/:id', protectMsg, sendMsg);

export default router;