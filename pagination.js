import React from 'react';

function Pagination({ pagination, setPagination }) {
  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(pagination.currentPage - 1)} disabled={pagination.currentPage === 1}>
        Previous
      </button>
      <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
      <button onClick={() => handlePageChange(pagination.currentPage + 1)} disabled={pagination.currentPage === pagination.totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;