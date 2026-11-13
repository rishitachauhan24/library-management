const  mongoose = require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model(User,studentSchema);