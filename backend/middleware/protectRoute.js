import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import CourtRoom from '../models/courtroom.model.js';


// used in sendMsg and getMsg routes. user and court eistence and participant check. Also creates req.user and req.court.
export const protectMsg = async (req, res, next) => {
    try{
        const jwttoken = req.cookies.token;

        if(!jwttoken){
            return res.status(401).json({error: "Unauthorized access: No token provided"});
        }

        const decoded = jwt.verify(jwttoken, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error: "Unauthorized access: Invalid token"});
        }
        
        const user = await User.findById(req.params.id).select("-password");
        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        req.user = user;

        const court = await CourtRoom.findById(req.params.cid);
        
        if(!court){
            return res.status(404).json({error: "Court Room not found"});
        }

        req.court = court;

        if(!court.participants.includes(user.id)){
            return res.status(401).json({error: "Unauthorized access: User not a participant in this Court Room"});
        }

        next();
    }catch(error){
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};