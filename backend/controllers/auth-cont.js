import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genTokenandCookie from "../utils/tokenGen.js";


export const login = async (req, res) => {
    try {
        const {email, username, password} = req.body;
        if(!email && !username){
            return res.status(400).json({error: "Email or Username is required"});
        }
        if(!password){
            return res.status(400).json({error: "Password is required"});
        }
        const user = await (email ? User.findOne({email: email}) : User.findOne({username: username}));
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({error: "Invalid Password", password: password, userPassword: user.password});
        }
        genTokenandCookie(user._id, res);
        res.status(200).json({
            message: "User logged in successfully",
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
            role: user.role
        });

    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const logout = (req, res) => {
    try{
        res.clearCookie('token');
        res.status(200).json({message: "User logged out successfully"});
    }catch(error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const signup = async (req, res) => {
    try{
        const {fullname,email,username,password,role} = req.body;

        //hash the password
        const hash = await bcrypt.hash(password, 10);

        const emailCheck = await User.findOne({email: email});
        if(emailCheck){
            return res.status(400).json({error: "Email already exists"});
        }

        const usernameCheck = await User.findOne({username: username});
        if(usernameCheck){
            return res.status(400).json({error: "Username already exists"});
        }

        const newUser = new User({
            fullname,
            email,
            username,
            password: hash,
            role
        });

        genTokenandCookie(newUser._id, res);

        await newUser.save();
        res.status(200).json({
            message: "User created successfully",
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        });

    }catch(error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    } 
}