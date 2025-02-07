import express from 'express';
import { get } from 'mongoose';
import { getCourts } from '../controllers/user-cont.js';

const router = express.Router();

router.get('/get-courts/:id',getCourts);

export default router;