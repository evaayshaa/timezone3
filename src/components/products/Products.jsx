import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../redux/reducers/productSlice'
import styles from './Products.module.scss'
import { postBasketThunk } from '../../redux/reducers/basketSlice'

const Products = () => {

    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProductThunk())
   
    
    }, [])

   const product=useSelector((state)=>state.product.product)

   const addToBasket=(item)=>{
    dispatch(postBasketThunk(item))
   }
  return (
    <div className={styles.cards}>
        {product && product.map(item=>{
            return <div className={styles.card}>
                <img src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button onClick={()=>addToBasket(item)}>ADD TO BASKET</button>
            </div>
        })}
      
    </div>
  )
}

export default Products
