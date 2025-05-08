import express from 'express'
import { deleteProduct, getProduct, postProduct } from '../controllers/productController.js'

const router=express.Router()

router.route('/')
.get(getProduct)
.post(postProduct)

router.route('/:id')
.delete(deleteProduct)

export default router