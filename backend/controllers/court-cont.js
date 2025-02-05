import CourtRoom from "../models/courtroom.model.js";
import Msg from "../models/msg.model.js";
import User from "../models/user.model.js";

const createCourtRoom = async (req, res) => {
    try {
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
        await newCourtRoom.save();
        res.status(201).json({message: "Court Room created successfully"});
    }catch(error){
        console.log("Error in createCourtRoom controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const sendMsg = async (req, res) => {
    try{
        const id = req.params.id;
        const content = req.body;
        const senderId = req.user._id;
        const courtRoomId = req.court._id;
        if(!content){
            return res.status(400).json({error: "Message content is required"});
        }
        const newMsg = new Msg({
            senderId,
            courtRoomId,
            content
        });
        await newMsg.save();
        const courtRoom = await CourtRoom.findById(courtRoomId);
        courtRoom.messages.push(newMsg._id);
        await courtRoom.save();
        res.status(201).json({message: "Message sent successfully"});
    }catch(error){
        console.log("Error in sendMsg controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export {createCourtRoom, sendMsg};