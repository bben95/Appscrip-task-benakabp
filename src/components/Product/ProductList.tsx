
import React from 'react'
import { ProductProps } from '../ShopLayout/ShopLayout'
import Image from 'next/image'
import styles from './productList.module.css'
import heartBlank from '../../../public/images/heart-blank.png'
import heartRed from '../../../public/images/heart-red.svg'

type ProductListProps = {
  filteredProducts: ProductProps[], 
  isSidebarOpen: boolean, 
  onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  liked: number[]
}

const ProductList = ({ filteredProducts, isSidebarOpen, onclick, liked }: ProductListProps) => {
  return (
    <div className={`${styles.productList} ${!isSidebarOpen ? styles.filterclose : ''}`} onClick={(e) => onclick(e)}>
      {filteredProducts.map((product) =>
        <div key={product.id}>
          <Image className={styles.image} src={product.thumbnail} alt={product.title} width={170} height={170} />
          <p >{product.title}</p>
          <div>
            <p style={{ fontSize: 12 }}><span>Sign in</span> or create an account for price</p>
            <Image data-heart-icon data-product-id={product.id} src={liked.includes(product.id) ? heartRed : heartBlank} alt='heart-icon' width={14} height={14} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductList