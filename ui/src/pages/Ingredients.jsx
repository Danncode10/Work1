import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../store/slices/filtersSlice';
import { ingredientsApi } from '../services/api';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.filters);

  const handleSearchChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleClearSearch = () => {
    dispatch(setQuery(''));
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    try {
      setLoading(true);
      const response = await ingredientsApi.getIngredients();
      setIngredients(response.data);
    } catch (err) {
      setError('Failed to load ingredients. Please try again later.');
      console.error('Error fetching ingredients:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Natural Health Ingredients</h1>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading ingredients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Natural Health Ingredients</h1>
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            onClick={fetchIngredients}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Natural Health Ingredients</h1>
      <div className="mb-8">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search natural ingredients..."
              value={query}
              onChange={handleSearchChange}
            />
            {query && (
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                onClick={handleClearSearch}
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {ingredients.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No ingredients found. Check back later!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  {ingredient.name}
                </h2>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-green-700 mb-2">Benefits:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {ingredient.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                    {ingredient.benefits.length > 3 && (
                      <li className="text-gray-500 italic">
                        +{ingredient.benefits.length - 3} more benefits
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-blue-700 mb-2">Nutrition Facts:</h3>
                  <div className="text-sm text-gray-600">
                    <p>Calories: {ingredient.calories || 'N/A'}</p>
                    {ingredient.nutrition_facts && Object.keys(ingredient.nutrition_facts).length > 0 && (
                      <p>
                        Key nutrients: {Object.keys(ingredient.nutrition_facts).slice(0, 2).join(', ')}
                        {Object.keys(ingredient.nutrition_facts).length > 2 && ' + more'}
                      </p>
                    )}
                  </div>
                </div>

                <Link
                  to={`/ingredients/${ingredient.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Ingredients;
