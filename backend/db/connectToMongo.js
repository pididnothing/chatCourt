import mongoose from "mongoose";

const connectToMongo = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB")
    }catch(error){
        console.log("Connecting to MongoDB", error.message);
    }
}
export default connectToMongo;