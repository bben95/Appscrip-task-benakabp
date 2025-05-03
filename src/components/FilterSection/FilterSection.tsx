import React from 'react';
import styles from './FilterSection.module.css';

type FilterSectionProps = {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string, checked: boolean) => void;
};

const FilterSection = ({ label, options, selected, onChange }: FilterSectionProps) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.optionList}>
        {options.map((option, index) => (
          <li key={index} className={styles.optionItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={e => onChange(option, e.target.checked)}
                className={styles.checkbox}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
