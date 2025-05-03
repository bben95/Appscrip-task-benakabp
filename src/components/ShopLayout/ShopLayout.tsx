'use client';
import { useState, useMemo } from 'react';
import styles from './shoplayout.module.css';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import Dropdown from '../Dropdown/Dropdown';
import ProductList from '../Product/ProductList';
export type ProductProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};
const items = ['RECOMMENDED', 'NEWEST FIRST', 'OLDEST FIRST', 'PRICE:HIGH-LOW', 'PRICE:LOW-HIGH']
const ShopLayout = ({ products }: { products: ProductProps[] }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    category: [],
    tags: [],
  } as Record<string, string[]>);
  const [sortOption, setSortOption] = useState('RECOMMENDED');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [liked, setLiked] = useState<any>([]);
  const updateFilter = (key: keyof typeof selectedFilters, value: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const updated = checked
        ? [...prev[key], value]
        : prev[key].filter(v => v !== value);
      return { ...prev, [key]: updated };
    });
  };
  const filterOptions = useMemo(() => ({
    brand: [...new Set(products.map(p => p.brand).filter(Boolean))],
    category: [...new Set(products.map(p => p.category).filter(Boolean))],
    tags: [...new Set(products.flatMap(p => p.tags).filter(Boolean))],
  }), [products]);
  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const matchBrand = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(product.brand);
      const matchCategory = selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category);
      const matchTags = selectedFilters.tags.length === 0 || product.tags.some(tag => selectedFilters.tags.includes(tag));
      return matchBrand && matchCategory && matchTags;
    });
    switch (sortOption) {
      case 'PRICE:LOW-HIGH':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'PRICE:HIGH-LOW':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'NEWEST FIRST':
        return [...filtered].sort((a, b) => new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime());
      case 'OLDEST FIRST':
        return [...filtered].sort((a, b) => new Date(a.meta.createdAt).getTime() - new Date(b.meta.createdAt).getTime());
      default:
        return filtered;
    }
  }, [products, selectedFilters, sortOption]);
  const handleSelect = (item: string) => {
    setSortOption(item)
  }
  const handleContainerClick = (e: any) => {
    const heartIcon = e.target.closest('[data-heart-icon]');
    if (heartIcon) {
      e.preventDefault();
      const id = heartIcon.getAttribute('data-product-id');
      const productId = parseInt(id)
      setLiked((prev: any) => [...prev].includes(productId) ? [...prev].filter((item) => item !== productId) : [...prev, productId])
    }
  }
  return (
    <div>
      <div className={styles.line}>
      </div>
      <div className={styles.options}>
        <div>
          <p>{products.length} items</p>
          <p onClick={() => setSidebarOpen(!isSidebarOpen)} style={{ appearance: 'none' }}>
            {isSidebarOpen ? 'X Close Filter' : 'Filter'}
          </p>
        </div>
        <div className={styles.verticleLine}>
        </div>
        <Dropdown name={sortOption} items={items} onSelect={handleSelect} />
      </div>
      <div className={styles.line}>
      </div>
      <div className={styles.shoplayoutContainer}>
        <FilterSidebar isSidebarOpen={isSidebarOpen} filterOptions={filterOptions} selectedFilters={selectedFilters} updateFilter={updateFilter} />
        <ProductList filteredProducts={filteredProducts} isSidebarOpen={isSidebarOpen} onclick={handleContainerClick} liked={liked} />
      </div>
    </div>
  )
}
export default ShopLayout