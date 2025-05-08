import React from 'react'
import styles from './Header.module.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  return (
    
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
            </div>

            <div className={styles.navbar}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/basket">Basket</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="">Latest</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div className={styles.icon}>
            <FaMagnifyingGlass />
            <FaRegUser />
            <FaShoppingCart />

            </div>

            <div className={styles.hamburger}>
            <RxHamburgerMenu />
            </div>
        </div>
    </div>
  )
}

export default Header
