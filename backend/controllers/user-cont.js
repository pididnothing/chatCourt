import User from "../models/user.model.js";
import Court from "../models/courtroom.model.js";
export const getCourts = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await User.findById(id);
        const courts = await Court.find({ participants: { $in: [id] } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ courts });
    }catch(error){
        console.log("Error in getCourts controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};