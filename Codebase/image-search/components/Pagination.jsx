import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxButtonsToShow = 5;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const start = 1;
  const end = Math.min(start + maxButtonsToShow - 1, totalPages);

  const visiblePageNumbers = pageNumbers.slice(start - 1, end);

  return (
    <nav className="my-4">
      <ul className="flex justify-center space-x-2">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="bg-gray-300 text-gray-700 px-3 py-2 rounded"
            >
              Previous
            </button>
          </li>
        )}
        {visiblePageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`${
                currentPage === page
                  ? "bg-teal-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-3 py-2 rounded`}
            >
              {page}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="bg-gray-300 text-gray-700 px-3 py-2 rounded"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
