
var express=require('express')

var router=express.Router()

const bookcontroller=require('../Controller/bookcontroller')
const authenticate= require('../authorize')
router.get('/AllBooks',bookcontroller.getBooks)
router.get('/:id',bookcontroller.getBook)


router.post('/book',authenticate,bookcontroller.add)

router.patch('/:id',async function(req:any,res:any){
    const _id=req.params.id;
    const getData=await books.findByIdAndUpdate(_id,req.body);
 res.send(getData)
})


router.delete('/deletebook/:id',authenticate,bookcontroller.delete)
  router.get('/price/:min_price/:max_price',bookcontroller.searchbyprice)
  router.get('/title/:text',bookcontroller.searchbytitle)
  router.get('/rating/:rating',bookcontroller.searchbyrating)
  router.get('/author/:text',bookcontroller.searchbyauthor)
 
module.exports=router;
 