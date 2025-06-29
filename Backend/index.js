import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'
import userRoute from "./routes/userRoute.js"
import conversationRoute from './routes/conversationRoute.js'
import gigRoute from './routes/gigRoute.js'
import messageRoute from './routes/messageRoute.js'
import orderRoute from './routes/orderRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB");

    } catch (error) {
        console.log(error);
    }
}
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/gigs",gigRoute)
app.use("/api/conversations",conversationRoute)
app.use("/api/messages",messageRoute)
app.use("/api/orders",orderRoute)
app.use("/api/reviews",reviewRoute)
app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).send(errorMessage)
})

app.listen(5000, () => {
    connect()
    console.log("Backend sever is running!");

})