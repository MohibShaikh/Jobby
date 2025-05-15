import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"

dotenv.config({});

const app=express();

// app.get("/home" , (req,res)=>{
//     return res.status(200).json({
//     message:"I am coming from backend",
//     success:true
// })
// });

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOption = {
    origin: process.env.NODE_ENV === 'production' 
        ? [
            'https://jobby-wheat.vercel.app',
            'https://jobby-ez57p6ysk-mohibzzs-projects.vercel.app',
            'https://jobby-ipcgfxnpn-mohibzzs-projects.vercel.app'
        ]
        : 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie']
}
app.use(cors(corsOption))

const PORT=process.env.PORT || 3000;


app.use("/api/v1/user",userRoute);
// http://localhost:8000/api/v1/user/register
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`)
})