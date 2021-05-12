var mongoose=require('mongoose')
var Schema=mongoose.Schema

var books=new Schema(
    {
        title:{
            type:String,
            require:[true,'Title is required']

        },
        author:{
            type:String,
            require:[true,'Author is required']

        },
        price:{
            type:Number,
            require:[true,'Price is required']

        },
        rating:{
            type:Number,
            require:[true,'Rating is required']

        },
        cover:{
            type:String,
            require:[true,'Cover is required']

        },
        authorurl:{
            type:String,
            require:[true,'Authorurl is required']

        },
        description:{
            type:String,
            require:[true,'Title is required']

        }
    });
    module.exports=mongoose.model('books',books)
  
   