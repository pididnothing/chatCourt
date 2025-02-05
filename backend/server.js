import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongo from "./db/connectToMongo.js";

import authRoutes from "./routes/auth-routes.js";
import courtRoutes from "./routes/court-routes.js";


const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies

app.get("/",(req,res) => {      // home route
    res.send("Hello World!!");
});

app.use("/api/auth",authRoutes); // all auth routes

app.use("/api/court",courtRoutes); // all court routes



app.listen(PORT,()=>{ 
    connectToMongo();
    console.log(`Server active on port ${PORT}`);
    });

