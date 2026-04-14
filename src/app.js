import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();

//use matlab config=setup kaise kya hoga 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))



app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser());

//import routes
import userRouter from './routes/user.routes.js'

//routes declarartion
app.use("/api/v1/users",userRouter)

//matlab jab ki koi ye call krega router pr chal jaaiga fir aage ka vha match hoga 
//matlab userRouter ke pich ye lag ke total url benga


export {app}