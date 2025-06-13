import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import CourtRoom from "../models/courtroom.model.js";

// used in getMsg route. user and court existence and participant check. Also creates req.user and req.court.
export const protectMsg = async (req, res, next) => {
  try {
    const jwttoken = req.cookies.token;

    if (!jwttoken) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: No token provided" });
    }

    const decoded = jwt.verify(jwttoken, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: Invalid token" });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    const court = await CourtRoom.findById(req.params.cid);

    if (!court) {
      return res.status(404).json({ error: "Court Room not found" });
    }

    req.court = court;

    if (!court.participants.includes(user.id)) {
      return res.status(401).json({
        error: "Unauthorized access: User not a participant in this Court Room",
        court: court,
        user: user,
      });
    }

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Same as protectMsg but also checks if user is allowed to send msg in current court state.
export const protectSendMsg = async (req, res, next) => {
  try {
    const jwttoken = req.cookies.token;

    if (!jwttoken) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: No token provided" });
    }

    const decoded = jwt.verify(jwttoken, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: Invalid token" });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    const court = await CourtRoom.findById(req.params.cid);
    if (!court) {
      return res.status(404).json({ error: "Court Room not found" });
    }

    req.court = court;

    if (!court.participants.includes(user.id)) {
      return res.status(401).json({
        error: "Unauthorized access: User not a participant in this Court Room",
      });
    }

    // check for closed court
    if (court.state === "closed") {
      return res.status(401).json({
        error: "Unauthorized access: Court is closed",
      });
    }

    // Check if user is allowed to send message based on court state
    const command = req.params.command;
    if (command == "objection") {
      if (court.state == "open" || court.state == "judge") {
        return res.status(401).json({
          error:
            "Unauthorized access: Objections can not be made in open or judge state",
        });
      }
      if (
        (!court.prosLawyer.includes(user.id) &&
          !court.defLawyer.includes(user.id)) ||
        (court.state == "prosecution" && court.prosLawyer.includes(user.id)) ||
        (court.state == "defence" && court.defLawyer.includes(user.id))
      ) {
        return res.status(401).json({
          error:
            "Unauthorized access: Objections can only be made by prosecution or defence lawyers during the opposition's presentation",
        });
      }
    }
    if (
      command === "objection" ||
      court.state === "open" ||
      (court.judge && court.judge.includes(user.id)) ||
      (((court.prosLawyer && court.prosLawyer.includes(user.id)) ||
        (court.prosClient && court.prosClient.includes(user.id))) &&
        court.state === "prosecution") ||
      (((court.defLawyer && court.defLawyer.includes(user.id)) ||
        (court.defClient && court.defClient.includes(user.id))) &&
        court.state === "defence") ||
      (court.jury && court.jury.includes(user.id) && court.state === "jury")
    ) {
      // User is allowed to send message
    } else {
      return res.status(401).json({
        error:
          "Unauthorized access: User not allowed to send message in current court state",
      });
    }

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Used in getCourts and createCourt routes. Checks if user exists and creates req.user.
export const protectCourt = async (req, res, next) => {
  try {
    const jwttoken = req.cookies.token;

    if (!jwttoken) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: No token provided" });
    }

    const decoded = jwt.verify(jwttoken, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: Invalid token" });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Used in updateCourtState route. Checks if user is a judge in the court room and creates req.user and req.court.
export const protectCourtState = async (req, res, next) => {
  try {
    const jwttoken = req.cookies.token;

    if (!jwttoken) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: No token provided" });
    }

    const decoded = jwt.verify(jwttoken, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized access: Invalid token" });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    const court = await CourtRoom.findById(req.params.cid);

    if (!court) {
      return res.status(404).json({ error: "Court Room not found" });
    }
    if (court.judge.includes(decoded.id)) {
      req.court = court;
      next();
    } else {
      return res.status(401).json({
        error:
          "Unauthorized access: User not a judge in this Court Room. Judge list is: " +
          court.judge,
      });
    }
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
