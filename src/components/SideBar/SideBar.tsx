'use client';
import React, { useState } from 'react';
import styles from './sidebar.module.css';
type SideBarProps = {
  menuItems: string[];
}
const SideBar = ({ menuItems }: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}>
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <h5 key={index}>{item}</h5>
          ))}
        </div>
      </div>
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
};
export default SideBar;
