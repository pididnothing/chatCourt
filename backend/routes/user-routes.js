import express from 'express';
import { get } from 'mongoose';
import { getCourts } from '../controllers/user-cont.js';
import { protectCourt } from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/get-courts', protectCourt, getCourts);

export default router;