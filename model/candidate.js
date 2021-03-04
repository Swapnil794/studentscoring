var mongoose = require("mongoose");


var candidateScehma = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:32,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            maxlength:32,
            trim:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
        rollNumber:{
            type:String,
            required:true,
            unique:true
        }
    },{timestamps:true}
)

module.exports = mongoose.model("Candidate",candidateScehma);