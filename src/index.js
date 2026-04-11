// require('dotenv').config({path:'./env'})
//iska improved version bi hai
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})
connectDB()



