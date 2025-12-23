import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to NutriFriendly</h1>
      <p className="mb-4">
        Discover natural ingredients and their health benefits. Search our database of proven natural remedies.
      </p>
      <Link
        to="/ingredients"
        className="inline-block min-h-11 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
      >
        Explore Ingredients
      </Link>
    </div>
  )
}

export default Home
