import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Ingredients from './pages/Ingredients'
import IngredientDetail from './pages/IngredientDetail'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/ingredients/:id" element={<IngredientDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
