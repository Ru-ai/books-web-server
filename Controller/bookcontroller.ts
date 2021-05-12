var books=require('../model/model')

exports.getBooks=async function(req:any,res:any){
    const getdata=await books.find({});
    console.log("hiiiiiiii")
if(getdata){
    res.status(200).send(getdata)
}
else{
    res.status(200).send([])
}
}

exports.getBook=async function(req:any,res:any){
    const _id=req.params.id;
    const getData=await books.findById({_id:_id});
 res.status(200).send(getData)
}
exports.searchbytitle=async function(req:any,res:any){
    console.log(req.params)
    const title= new RegExp(req.params.text);
    const getData=await books.find({title:{$regex:title,$options:'i'}});
 res.status(200).send(getData)
}
exports.searchbyauthor=async function(req:any,res:any){
    const author= new RegExp(req.params.text);
    const getData=await books.find({author:{$regex:author,$options:'i'}});
 res.status(200).send(getData)
}

exports.searchbyprice=async function(req:any,res:any){
let min_price=req.params.min_price
let max_price=req.params.max_price
books.find({ price: { $gte: min_price, $lte: max_price } },(err:any,data:any)=>{
   if(err){
       res.status(400).send("Error")
   }else{
       res.status(200).send(data)
   }
})
}

exports.searchbyrating=async function(req:any,res:any){
    let rating=req.params.rating

    books.find({ rating: { $gte: rating } },(err:any,data:any)=>{
       if(err){
           res.status(400).send("Error")
       }else{
           res.status(200).send(data)
       }
    })
    }

exports.add=function(req:any,res:any){
    console.log(req.body)
    let book=new books({
            // {type:'POST',
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            rating:req.body.rating,
            cover:req.body.cover,
            authorurl:req.body.authorurl,
            description:req.body.description
        }
            )
    book.save()
    res.status(200).send(book)
}
exports.delete=async function(req:any,res:any){
    console.log(req.params)
    const DeleteData=await books.findOne({_id:req.params.id})
    if(DeleteData){
        books.deleteOne(DeleteData).then(res.status(200).send(DeleteData))
    }
    }
    exports.search=async function(req:any,res:any){
        const search=await books.findOne({title:req.body.title})
        res.status(200).send(search)
    }