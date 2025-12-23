import { Link } from 'react-router-dom';

function ErrorPage({ title = "Oops! Something went wrong", message, onRetry, retryLabel = "Try Again", backTo, backToLabel = "Go Back" }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral via-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        {backTo && (
          <div className="mb-8">
            <Link
              to={backTo}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-600 hover:text-primary-800 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </div>
        )}

        {/* Error Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent mb-4">
            {title}
          </h1>
          <p className="text-text-secondary mb-6 text-lg">
            {message}
          </p>
          <div className="flex justify-center space-x-4">
            {onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {retryLabel}
              </button>
            )}
            {backTo && (
              <Link
                to={backTo}
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {backToLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
