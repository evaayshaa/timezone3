import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
<div className={styles.container}>
    <div className={styles.info}>
        <h1>SELECT YOUR NEW PERFECT STYLE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum aspernatur, nihil, magni est molestias cumque ut dignissimos eius corporis fugit labore velit, dolore natus alias nam esse soluta tempore.</p>
        <button>SHOP NOW</button>
    </div>

    <div className={styles.image}>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
    </div>
</div>
      
    </div>
  )
}

export default Hero
