function PaginationControls({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    const halfVisible = Math.floor(maxVisible / 2)

    let startPage = Math.max(1, currentPage - halfVisible)
    let endPage = Math.min(totalPages, startPage + maxVisible - 1)

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-md border border-gray-300 bg-white text-text-secondary hover:bg-primary-50 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-text-secondary transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-md border transition-colors ${
            page === currentPage
              ? 'bg-primary-600 text-white border-primary-600'
              : 'border-gray-300 bg-white text-text-secondary hover:bg-primary-50 hover:text-primary-700'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-md border border-gray-300 bg-white text-text-secondary hover:bg-primary-50 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-text-secondary transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default PaginationControls
