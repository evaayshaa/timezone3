import basketModel from "../models/basketModel.js"


const getbasket=async(req,res)=>{

    const basket=await basketModel.find()
    res.json(basket)
}


const postbasket=async(req,res)=>{

    const {thumbnail,title,price}=req.body
    const newbaskets={thumbnail,title,price}
    await basketModel.create(newbaskets)
    res.json(newbaskets)
}

const deletebasket=async(req,res)=>{
    const {id}=req.params

    await basketModel.findByIdAndDelete(id)
    res.json('basket ugurla silindi')

}

export {getbasket,postbasket,deletebasket}