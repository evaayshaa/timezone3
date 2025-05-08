import React from 'react'
import styles from './Arrivals.module.scss'

const Arrivals = () => {
  return (
    <div className={styles.arrivals}>
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>New Arrivals</h2>
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
                    <h3>Thermo Ball Etip Gloves</h3>
                    <p>$ 45,743</p>
                </div>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
                    <h3>Thermo Ball Etip Gloves</h3>
                    <p>$ 45,743</p>
                </div>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
                    <h3>Thermo Ball Etip Gloves</h3>
                    <p>$ 45,743</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Arrivals
