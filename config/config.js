import mongoose from "mongoose"

export const connectDB=async(req,res)=>{
    await mongoose.connect(process.env.MONGO_URL)
}