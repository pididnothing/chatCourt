import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: 'Sender Id is required'
    },
    courtRoomId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourtRoom',
        required: 'Court Room Id is required'
    },
    content:{
        type: String,
        required: 'Content is required'
    }
},{
    timestamps: true});

const Msg = mongoose.model('Msg', msgSchema);
export default Msg;