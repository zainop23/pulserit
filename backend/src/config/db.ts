// mongo db se connect karne ke liye

import mongoose from "mongoose";

const connectDB= async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL as string)
        console.log(`Mongo db connected: ${conn.connection.host}`);
    }   
    catch(e){
        console.error(e);
        
    }
}

export default connectDB;