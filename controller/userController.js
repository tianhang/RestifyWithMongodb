var mongoose=require('mongoose');
var user=mongoose.model('User');
//POST
exports.createUser=function(req,res,next){
    
 var postUserData=new user(req.body);
    postUserData.save(function(err,userDetils){
        if(err){
            res.status(500);
            res.json(err)
        }else{
            res.json(userDetils)             
        }
    })
}
//GET
exports.getUser=function(req,res,next){

    user.find(function(err,userDetils){
        if(err){
            res.status(500);
            res.json(err)
        }else{
            res.json(userDetils)             
        }
    })
}