import User from "../models/user.model.js";

export const login = (req, res) => {
    res.send("Login User");
}

export const logout = (req, res) => {
    res.send("Logout User");
}

export const signup = async (req, res) => {
    try{
        const {fullname,email,username,password,role} = req.body;

        const emailCheck = await User.findOne({email: email});
        if(emailCheck){
            //console.log(User.findOne({email: email}));
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
            password,
            role
        });

        await newUser.save();
        res.status(200).json({
            message: "User created successfully",
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