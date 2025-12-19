import { useParams } from 'react-router-dom'

function IngredientDetail() {
  const { id } = useParams()

  return (
    <div>
      <h1>Ingredient Detail</h1>
      <p>Details for ingredient ID: {id} - coming soon!</p>
    </div>
  )
}

export default IngredientDetail
