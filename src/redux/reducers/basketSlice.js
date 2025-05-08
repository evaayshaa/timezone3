import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getBasketThunk=createAsyncThunk('get/basket',async()=>{
    const res=await axios.get('http://localhost:5007/basket')
    return res.data

})
export const  postBasketThunk=createAsyncThunk('post/basket',async(data)=>{
    const res=await axios.post('http://localhost:5007/basket',data)
    return res.data

})

export const deleteBasketThunk=createAsyncThunk('delete/basket',async(id)=>{
    const res=await axios.delete (`http://localhost:5007/basket/${id}`)
    return id

})

export const basketSlice=createSlice({
    name:'basket',
    initialState:{
        basket:[]
    },

    extraReducers:(builder)=>{
        builder
       
                   .addCase(getBasketThunk.fulfilled, (state, action) => {
                       state.loading = false
       
                       state.basket = action.payload
                   })
       
                   .addCase(getBasketThunk.pending, (state, action) => {
                       state.loading = true
       
       
                   })
       
                   .addCase(getBasketThunk.rejected, (state, action) => {
                       state.loading = false
                       state.error = action.error
                   })
       
       
       
       
                   .addCase(postBasketThunk.fulfilled, (state, action) => {
                       state.loading = false
       
                       state.basket.push(action.payload)
                   })
       
                   .addCase(postBasketThunk.pending, (state, action) => {
                       state.loading = true
       
       
                   })
       
                   .addCase(postBasketThunk.rejected, (state, action) => {
                       state.loading = false
                       state.error = action.error
                   })
       
       
       
                   .addCase(deleteBasketThunk.fulfilled, (state, action) => {
                       state.loading = false
        
                       state.basket=state.basket.filter((item)=>item._id !==action.payload)
                   })
       
       
        
        
    }
})

export default basketSlice.reducer