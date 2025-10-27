import React from 'react';
import { categories } from '../data/products';

const Filter = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (category) => {
    onFilterChange('category', category);
  };

  const handleSortChange = (sortBy) => {
    onFilterChange('sortBy', sortBy);
  };

  const handleSearchChange = (search) => {
    onFilterChange('search', search);
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <h4>Search</h4>
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${filters.category === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Sort By</h4>
        <select
          value={filters.sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="sort-select"
        >
          <option value="name">Name (A-Z)</option>
          <option value="price_low">Price (Low to High)</option>
          <option value="price_high">Price (High to Low)</option>
          <option value="abv">ABV (%)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;