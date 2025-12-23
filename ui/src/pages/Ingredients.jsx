import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../store/slices/filtersSlice';
import { fetchIngredients } from '../store/slices/ingredientsSlice';
import IngredientCard from '../components/IngredientCard';

function Ingredients() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.filters);
  const { list: ingredients, loading, error } = useSelector((state) => state.ingredients);

  const handleSearchChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleClearSearch = () => {
    dispatch(setQuery(''));
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Natural Health Ingredients</h1>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p className="mt-2 text-text-secondary">Loading ingredients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Natural Health Ingredients</h1>
        <div className="text-center text-error">
          <p>{typeof error === 'object' ? error.detail || 'Failed to load ingredients. Please try again later.' : error}</p>
          <button
            onClick={() => dispatch(fetchIngredients())}
            className="mt-4 bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
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
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary hover:text-text-primary"
                onClick={handleClearSearch}
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {ingredients.length === 0 ? (
        <div className="text-center text-text-secondary">
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
