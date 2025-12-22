import ExampleButton from '../components/ExampleButton'

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to NutriFriendly</h1>
      <p className="mb-4">
        Discover natural ingredients and their health benefits. Search our database of proven natural remedies.
      </p>
      <ExampleButton>Explore Ingredients</ExampleButton>
    </div>
  )
}

export default Home
