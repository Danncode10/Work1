import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../store/slices/filtersSlice';
import { ingredientsApi } from '../services/api';
import IngredientCard from '../components/IngredientCard';

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
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Ingredients;
