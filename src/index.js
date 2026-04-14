// require('dotenv').config({path:'./env'})
//iska improved version bi hai
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import {app} from './app.js';
dotenv.config({
    path:'./.env'
})


connectDB()
.then(()=>{
    //if app is not able to listen then use it taaki safe rhe 
    app.on("error",(error)=>{
        console.log("error :",error);
        throw error; 
    })
    //yadi subkuch shi hai to listen krado
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`);  
    })
})
.catch((error)=>{
    console.log("mongo db connection failed :",error);
})



