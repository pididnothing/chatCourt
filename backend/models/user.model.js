import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'Name is required'
    },
    email:{
        type: String,
        required: 'Email is required',
        unique: true
    },
    username:{
        type: String,
        required: 'Username is required',
        unique: true
    },
    password:{
        type: String,
        required: 'Password is required'
    },
    role:{
        type: String,
        default: 'client',
        enum: ["judge", "lawyer", "client"]
    },
},{
    timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;