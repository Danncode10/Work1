function ErrorMessage({ message, onRetry, showRetry = true }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{message}</p>
          </div>
          {showRetry && onRetry && (
            <div className="mt-4">
              <button
                onClick={onRetry}
                className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
