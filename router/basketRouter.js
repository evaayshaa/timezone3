import express from 'express'
import { deletebasket, getbasket, postbasket } from '../controllers/basketController.js'


const basketRouter=express.Router()

basketRouter.route('/')
.get(getbasket)
.post(postbasket)

basketRouter.route('/:id')
.delete(deletebasket)

export default basketRouter