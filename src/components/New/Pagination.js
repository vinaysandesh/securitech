import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    let pages = [];
    const maxPagesToShow = 5; // Number of page buttons to show (2 on either side + current)
    const halfWindow = Math.floor(maxPagesToShow / 2);

    // If totalPages is less than the max pages to show, display all
    if (totalPages <= maxPagesToShow) {
      pages = [...Array(totalPages)].map((_, i) => i + 1);
    } else {
      // Calculate start and end page
      let startPage = Math.max(1, currentPage - halfWindow);
      let endPage = Math.min(totalPages, currentPage + halfWindow);

      // Adjust if the start or end goes beyond the limits
      if (currentPage <= halfWindow) {
        endPage = maxPagesToShow;
      } else if (currentPage + halfWindow >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
      }

      // Add first page and ellipsis
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push('...');
        }
      }

      // Add the range of pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis and last page
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {getPageNumbers().map((page, index) =>
        page === '...' ? (
          <span key={index} className="ellipsis">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
