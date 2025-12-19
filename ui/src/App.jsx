import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Ingredients from './pages/Ingredients'
import IngredientDetail from './pages/IngredientDetail'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
