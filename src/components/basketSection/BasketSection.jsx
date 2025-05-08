import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../../redux/reducers/basketSlice'
import styles from './BasketSection.module.scss'




export const BasketSection = () => {

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getBasketThunk())
    
    }, [])

   const basket=useSelector((state)=>state.basket.basket)


   const deleteBasket=(id)=>{
    dispatch(deleteBasketThunk(id))
   }
  return (
    <div className={styles.cards}>
        {basket && basket.map(item=>{
            return <div className={styles.card}>
                <img src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <p>{item.price}</p>
          <button onClick={()=>deleteBasket(item._id)}>SIL</button>

       


            </div>
        })}
        
    </div>
  )
}
