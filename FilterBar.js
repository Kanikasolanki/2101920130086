import React from 'react';

function FilterBar({ setFilters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <select name="category" onChange={handleFilterChange}>
        <option value="">Select Category</option>
        <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
        {/* Add more categories */}
      </select>
      <select name="company" onChange={handleFilterChange}>
        <option value="">Select Company</option>
        <option value="AMZ">Amazon</option>
        <option value="FLP">Flipkart</option>
        {/* Add more companies */}
      </select>
      {/* Add more filters for price, rating, etc. */}
    </div>
  );
}

export default FilterBar;