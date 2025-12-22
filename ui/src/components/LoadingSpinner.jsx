function LoadingSpinner({ size = 'md', message = 'Loading...' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        className={`${sizeClasses[size]} border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin`}
      ></div>
      {message && (
        <p className="mt-4 text-text-secondary text-sm">{message}</p>
      )}
    </div>
  )
}

export default LoadingSpinner
