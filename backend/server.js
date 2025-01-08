import express from "express";
import authRoutes from "./routes/auth-routes.js";
import connectToMongo from "./db/connectToMongo.js";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json()); // for parsing application/json

app.get("/",(req,res) => {      // home route
    res.send("Hello World!!");
});

app.use("/api/auth",authRoutes); // all auth routes



app.listen(PORT,()=>{ 
    connectToMongo();
    console.log(`Server active on port ${PORT}`);
    });

