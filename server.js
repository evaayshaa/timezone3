import express, { urlencoded } from 'express'
import cors from 'cors'
import router from './router/productRouter.js'
import { configDotenv } from 'dotenv'
import { connectDB } from './config/config.js'
import basketRouter from './router/basketRouter.js'

configDotenv()
const app=express()

app.use(cors('*'))
app.use(express.json())
app.use(urlencoded({extended:true}))

 connectDB()

app.use('/product',router)
app.use('/basket',basketRouter)
app.listen ('5007',()=>{
    console.log("backend 5007-ci portda isleyir");
    
})