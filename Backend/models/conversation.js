import mongoose from 'mongoose';
const { Schema } = mongoose;

const conversationSchema = new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    sellerId:{
        type:String,
        required:true,
        unique:true
    },
    buyerId:{
        type:String,
        required:true,
        unique:true
    },
    readBySeller:{
        type:Boolean,
        required:true
    },
    readByBuyer:{
        type:Boolean,
        required:true
    },
    lastMessage:{
        type:String,
        required:false
    }
}, { timestamps: true })

export default mongoose.model("ConversationSchema", conversationSchema)