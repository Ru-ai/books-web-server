var express=require('express')
var mongoose=require('mongoose')
const app=express()
app.use(express.json()) //body data is converted to json
app.use('/book',require('./Router/router'))
app.use('/user',require('./Router/userrouter'))


const DB=`mongodb+srv://rutu:rutu1818@cluster0.ojqal.mongodb.net/booksapp?retryWrites=true&w=majority`;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})

.then(()=>{console.log("Connected")})
.catch((err:any)=>console.log("Error"))
app.listen(4000||process.env.port,function(){
    console.log("Listening");
})