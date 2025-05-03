'use client'
import React, { useState } from 'react'
import styles from './nav.module.css'
import Image from 'next/image'
import Logo from '../../../public/images/Logo.png'
import Dropdown from '../Dropdown/Dropdown'
import SearchIcon from '../../../public/images/search-normal.png'
import HeartIcon from '../../../public/images/heart.png'
import ShoppingBagIcon from '../../../public/images/shopping-bag.png'
import ProfileIcon from '../../../public/images/profile.png'
import SideBar from '../SideBar/SideBar'
const menuItems = ['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'];
const Navbar = () => {
   const [item, setItem] = useState('')
   const onselect = (newItem: string) => {
      setItem(newItem)
   }
   return (
      <nav className={styles.nav}>
         <div className={styles.topbar}>
            <div>
               <div className={styles.mobileMenu}>
                  <SideBar menuItems={menuItems} />
               </div>
               <Image className={styles.logo} src={Logo} alt='logo' />
            </div>
            <h1 style={{ margin: '0 auto' }}>
               LOGO
            </h1>
            <div>
               <Image className={styles.icon} src={SearchIcon} alt='search-icon' />
               <Image className={styles.icon} src={HeartIcon} alt='heart-icon' />
               <Image className={styles.icon} src={ShoppingBagIcon} alt='shoppingbag-icon' />
               <Image className={`${styles.icon} ${styles.user}`} src={ProfileIcon} alt='profile-icon' />
               <div className={styles.dropdown}>
                  <Dropdown name='Eng' items={['Hindi', 'English', 'Kan']} onSelect={onselect} />
               </div>
            </div>
         </div>
         <div className={styles.desktopMenu}>
            <div>
               <h5>
                  SHOP
               </h5>
               <h5>
                  SKILLS
               </h5>
               <h5>
                  STORIES
               </h5>
               <h5>
                  ABOUT
               </h5>
               <h5>
                  CONTACT US
               </h5>
            </div>
         </div>
      </nav>
   )
}
export default Navbar