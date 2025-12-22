import { Link } from 'react-router-dom'

function IngredientCard({ ingredient }) {
  // Get first benefit or default description
  const shortDescription = ingredient.benefits && ingredient.benefits.length > 0
    ? ingredient.benefits[0].substring(0, 80) + (ingredient.benefits[0].length > 80 ? '...' : '')
    : 'Natural ingredient for health and wellness'

  return (
    <Link
      to={`/ingredients/${ingredient.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-3 border border-gray-200 hover:border-primary-300 no-underline"
    >
      <div className="flex items-center space-x-3">
        {/* Image Placeholder */}
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          {/* Name */}
          <h2 className="text-sm font-semibold text-primary-700 hover:text-primary-800 truncate">
            {ingredient.name}
          </h2>

          {/* Short Description */}
          <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default IngredientCard
