import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import Pagination from './Pagination';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({}); // Object to store selected filters
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1 });

  useEffect(() => {
    // Fetch products from API whenever filters or pagination changes
    axios
      .get(`http://20.244.56.144/test/companies/${filters.company}/categories/${filters.category}/products`, {
        params: {
          top: filters.top || 10,
          minPrice: filters.minPrice || 1,
          maxPrice: filters.maxPrice || 10000,
        },
      })
      .then((response) => {
        setProducts(response.data); // Store the fetched products in state
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [filters, pagination]);

  return (
    <div>
      <FilterBar setFilters={setFilters} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination pagination={pagination} setPagination={setPagination} />
    </div>
  );
}

export default AllProducts;