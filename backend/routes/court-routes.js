import express from 'express';
import { createCourtRoom, sendMsg, getMsg } from '../controllers/court-cont.js';
import { protectMsg } from '../middleware/protectRoute.js';

const router = express.Router();

// create a court room
router.post('/create-court-room/:id', createCourtRoom);

// send message in a court room
router.post('/send-msg/:id/:cid', protectMsg, sendMsg);

// get messages in a court room
router.get('/get-msg/:id/:cid', protectMsg, getMsg);

export default router;