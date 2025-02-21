import CourtRoom from "../models/courtroom.model.js";
import Msg from "../models/msg.model.js";
import User from "../models/user.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const createCourtRoom = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({error: "User not found"});
        }
        const {courtRoomName, judge, prosLawyer, prosClient, defLawyer, defClient} = req.body;
        const participants = [judge, prosLawyer, prosClient, defLawyer, defClient];
        for (let i = 0; i < participants.length; i++) {
            const participant = await User.findById(participants[i]);
            if (!participant) {
            return res.status(404).json({error: `Participant with id ${participants[i]} not found`});
            }
        }
        if(!courtRoomName || !participants || !judge || !prosLawyer || !prosClient || !defLawyer || !defClient){
            return res.status(400).json({error: "All fields are required"});
        }
        const newCourtRoom = new CourtRoom({
            courtRoomName,
            participants,
            judge,
            prosLawyer,
            prosClient,
            defLawyer,
            defClient,
            messages: []
        });

        user.courts.push(newCourtRoom._id);

        await Promise.all([user.save(),newCourtRoom.save()]);
        res.status(201).json({message: "Court Room created successfully", courtRoom: newCourtRoom});
    }catch(error){
        console.log("Error in createCourtRoom controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const sendMsg = async (req, res) => {
    try{
        const courtRoomId = req.court.id;
        const content = req.body.content;
        const senderId = req.user.id;
        if(!content){
            return res.status(400).json({error: "Message content is required"});
        }
        const newMsg = new Msg({
            senderId,
            courtRoomId,
            content
        });
        const courtRoom = req.court;
        courtRoom.messages.push(newMsg._id);
        await Promise.all( [newMsg.save(), courtRoom.save()]);

        const participants = req.court.participants.filter(participant => participant.toString() !== senderId.toString());
        participants.forEach(async participant => {
            const receiverSocketId = getReceiverSocketId(participant);
            if(receiverSocketId){
                io.to(receiverSocketId).emit("newMsg", newMsg);
            }
        });
        res.status(201).json({message: newMsg});
    }catch(error){
        console.log("Error in sendMsg controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const getMsgs = async (req, res) => {
    try{
        const courtRoomId = req.court.id;
        const messages = await Msg.find({courtRoomId}).populate("senderId", "username");
        res.status(200).json({messages});
    }catch(error){
        console.log("Error in getMsg controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const getCourtCard = async (req, res) => {
    try{
        const courtRoom = req.court;
        const userId = req.user.id;
        res.status(200).json({courtRoom});
    }catch(error){
        console.log("Error in getCourtCard controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};