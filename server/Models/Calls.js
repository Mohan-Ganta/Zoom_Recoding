import mongoose from "mongoose";

const callSchema = new mongoose.Schema({
    userId: {type:String, required:true},
    title: {type:String, required:true},
    desc: {type:String, required:true},
})

export default new mongoose.model('calls',callSchema);