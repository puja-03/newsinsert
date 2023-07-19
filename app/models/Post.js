import mongoose from "mongoose"
//mongoosedb schema using mongoose

const PostSchema = new mongoose.Schema({
    title:{type:String, require:true},
    author:{type:String},
    content:{type:String},
},{
    timestamps:true
})

// creating and exporting 

module.exports = mongoose.models.Post || mongoose.model("Post" ,PostSchema)