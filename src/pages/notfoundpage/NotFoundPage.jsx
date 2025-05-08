

import React from 'react'
import { useNavigate } from 'react-router-dom';



const NotFoundPage = () => {
    const navigate = useNavigate(); 
  return (
    <div>
      <h1>NOT FOUND PAGE</h1>
      <button onClick={()=>navigate('/')}>GO HOME </button>

      
      </div>
  )
}

export default NotFoundPage
