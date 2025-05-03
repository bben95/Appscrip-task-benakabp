import React from 'react'
import styles from './filtersidebar.module.css'
import FilterSection from '../FilterSection/FilterSection';

type FilterSidebarProps = {
  isSidebarOpen: boolean;
  filterOptions: {brand:string[],category:string[],tags:string[]};
  selectedFilters:  {brand:string[],category:string[],tags:string[]};
  updateFilter: (key: any, value: string, checked: boolean) => void;
}

const FilterSidebar = ({ isSidebarOpen, filterOptions, selectedFilters, updateFilter }: FilterSidebarProps) => {
  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <FilterSection
        label="BRAND"
        options={filterOptions.brand}
        selected={selectedFilters.brand}
        onChange={(val, checked) => updateFilter('brand', val, checked)}
      />
      <FilterSection
        label="CATEGORY"
        options={filterOptions.category}
        selected={selectedFilters.category}
        onChange={(val, checked) => updateFilter('category', val, checked)}
      />
      <FilterSection
        label="TAGS"
        options={filterOptions.tags}
        selected={selectedFilters.tags}
        onChange={(val, checked) => updateFilter('tags', val, checked)}
      />
    </aside>

  )
}

export default FilterSidebar