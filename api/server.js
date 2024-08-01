// package
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import path from "path"
// routes

import userRoutes from './routes/user.route.js';
import authRoutes from "./routes/auth.routes.js"

const app = express();

dotenv.config();
app.use(express.json())
app.use(cookieParser());


const Url = process.env.Mongo_Url;
const port = process.env.Port









app.listen(port,( ) => {
    mongoose.connect(Url).
    then(() => {
        console.log("connected Succesfully")
    }).
    catch((err) => {
        console.log(err)
    })
    console.log(`http://localhost:${port}/`)
})


const ___dirname = path.resolve()



app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)



app.use(express.static(path.join(___dirname,'/client/dist')))

app.get('*',(req,res) => {
    res.sendFile(path.join(___dirname,'client','dist','index.html'))
});

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });

})


