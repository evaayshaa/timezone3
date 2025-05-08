import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import Admin from '../pages/admin/Admin'
import NotFoundPage from '../pages/notfoundpage/NotFoundPage'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/> 
         <Route path='/admin' element={<Admin/>}/> 
         <Route path='*' element={<NotFoundPage/>}/> 
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Router
