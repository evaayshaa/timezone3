import productModel from "../models/productModel.js"


const  getProduct=async(req,res)=>{
    const products=await productModel.find()
    res.json(products)
}

const postProduct=async(req,res)=>{
    const{thumbnail,title,price}=req.body
    const newProducts={thumbnail,title,price}
    await productModel.create(newProducts)
    res.json(newProducts)
}

const deleteProduct=async(req,res)=>{
    const{id} =req.params
    await productModel.findByIdAndDelete(id)
    res.json('product ugurla silindi')
}

export {getProduct,postProduct,deleteProduct}