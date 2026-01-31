import React from 'react';
import './FilterBar.css';

const FilterBar = ({ categories, selectedCategory, onCategoryChange, showFavorites, onToggleShowFavorites, searchTerm, onSearchChange }) => {
  return (
    <div className="filter-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="filter-controls">
        <div className="category-filters">
          <button
            className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => onCategoryChange('All')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <button
          className={`favorites-toggle ${showFavorites ? 'active' : ''}`}
          onClick={onToggleShowFavorites}
        >
          {showFavorites ? '❤️ Favorites' : '🤍 Show Favorites'}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
