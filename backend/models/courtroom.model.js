import mongoose from "mongoose";

const courtRoomSchema = new mongoose.Schema(
  {
    courtRoomName: {
      type: String,
      required: "Court Room Name is required",
    },
    participants: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      required: "Participants are required",
    },
    judge: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      required: "Judge(s) are required",
    },
    prosLawyer: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      required: "Prosecution Lawyer(s) are required",
    },
    prosClient: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    defLawyer: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      required: "Defence Lawyer(s) are required",
    },
    defClient: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    jury: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },

    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: "Messages are required",
      },
    ],
    state: {
      type: String,
      enum: ["open", "defence", "prosecution", "judge", "jury", "closed"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

const CourtRoom = mongoose.model("CourtRoom", courtRoomSchema);
export default CourtRoom;
