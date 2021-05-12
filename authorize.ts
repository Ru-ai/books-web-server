var jwt=require('jsonwebtoken')
function authenticateToken(req:any,res:any,next:any){
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    
    if(token==null ) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err:any,user:any)=>{
        
        if(err){
        return res.sendStatus(403)
        }else{
        
        req.user=user
        next()
        }
    })
}
module.exports=authenticateToken
