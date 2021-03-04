const Candidate = require("../model/candidate");
const {validationResult} = require('express-validator')

exports.insertCandidate =(req,res) =>
{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()[0].msg
        })
    }
    const User = new Candidate(req.body);
    console.log("9001",User);
    User.save((err,user) => { 
        console.log("9008",user);
        if(err){
            return res.status(400).json({
                err:"something went wrong"
            })
        }
        res.json({user});
    })
}