'use client';

import { useState } from 'react';
import styles from './dropdown.module.css';
import Arrow from '../../../public/images/arrow-left.png'
import Image from 'next/image';

type DropdownProps = {
  name: string
  items: string[];
  onSelect: (item: string) => void;
};

export default function Dropdown({ name, items = [], onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.button}>
        {name}
        <Image src={Arrow} className={`${styles.arrow} ${isOpen ? styles.up : ''}`} alt='dropdown-icon' />
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {items.map((item, index) => (
            <li
              key={index}
              className={styles.item}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
