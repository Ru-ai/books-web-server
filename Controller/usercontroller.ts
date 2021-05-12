var User = require('../model/usermodel');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const signup = async (req:any, res:any) => {
    console.log("hi")
    let salt=await bcrypt.genSalt()
    let hashpassword= await bcrypt.hash(req.body.password,salt)
    // bcrypt.hash(req.body.password, 10, function (err:any, hashpassword:any) {
    //     if (err) {
    //         res.json({
    //             error: err
    //         })
    //     }
        let user = new User({

            name: req.body.username,
            email: req.body.email,
            password: hashpassword,
            phone: req.body.phone
        })
        
        console.log( user)
        
        user.save((err:any,result:any)=>{
            if(err){
                res.status(400).send('Error')
            }
            else{
                res.status(201).send('Created')
            }
        })
        };
   


const login =async (req:any,res:any) =>{
   
    let user = await User.findOne({email:req.body.email})
    console.log(req.body)
    if(user){
        let verify=bcrypt.compare(req.body.password,user.password)
        if(verify){

            let token=jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_SECRET)
            res.status(200).send({accesstoken:token})
        }
        else{
            res.status(401).send('Wrong password')
        }
    }
    else{
        res.status(404).send('USer not found')
    }
}



// const getAlluser=async(req:any,res:any)=>{
//     try{
// const data=await User.find()
// res.status(200).json({
//     data:{
//         users:data
//     }
// })}catch(err){
//      res.status(400).json({
//          status:'Fail'
//      })
//     }
// }
module.exports = {
   signup,login
}