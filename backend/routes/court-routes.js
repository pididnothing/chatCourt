import express from "express";
import {
  createCourtRoom,
  sendMsg,
  getMsgs,
  getCourtCard,
  updateCourtState,
} from "../controllers/court-cont.js";
import {
  protectCourt,
  protectCourtState,
  protectMsg,
  protectSendMsg,
} from "../middleware/protectRoute.js";

const router = express.Router();

// create a court room
router.post("/create-court-room", protectCourt, createCourtRoom);

// send message in a court room
router.post("/send-msg/:cid", protectSendMsg, sendMsg);

// get messages in a court room
router.get("/get-msg/:cid", protectMsg, getMsgs);

// get court card details
router.get("/get-court-card/:cid", protectMsg, getCourtCard);

router.post("/update-court-state/:cid", protectCourtState, updateCourtState);

export default router;
