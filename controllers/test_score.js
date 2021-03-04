const  Test_score = require("../model/test_score");


exports.assignMarks = (req,res) =>{
    const Marks = new Test_score(req.body)
    Marks['totalMarks']=Marks['firstRoundNumber']+Marks['secondRoundNumber']+Marks['thirdRoundNumber'];
    console.log("9002",Marks);
    Marks.save((err,marks)=>{
        console.log("9003",marks);
        if(err){
            return res.status(400).json({
                err :"not able to assign marks"
            })
        }
        res.json({message:"marks assign sucessfully",marks});
    })
}