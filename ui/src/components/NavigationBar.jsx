import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../store/slices/filtersSlice'

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()
  const { query } = useSelector((state) => state.filters)
  const location = useLocation()
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSearchSubmit = () => {
    if (searchInput.trim()) {
      dispatch(setQuery(searchInput.trim()))
      navigate('/ingredients')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit()
    }
  }

  const handleClearSearch = () => {
    setSearchInput('')
    dispatch(setQuery(''))
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-primary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="text-xl font-bold text-primary-700">
                NutriFriendly
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="text-text-secondary hover:bg-primary-100 hover:text-primary-700 rounded-md px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link to="/ingredients" className="text-text-secondary hover:bg-primary-100 hover:text-primary-700 rounded-md px-3 py-2 text-sm font-medium transition-colors">
                  Ingredients
                </Link>
                <Link to="/login" className="text-text-secondary hover:bg-primary-100 hover:text-primary-700 rounded-md px-3 py-2 text-sm font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register" className="text-text-secondary hover:bg-primary-100 hover:text-primary-700 rounded-md px-3 py-2 text-sm font-medium transition-colors">
                  Register
                </Link>
              </div>
            </div>
          </div>
          {location.pathname !== '/ingredients' && (
            <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex space-x-2">
                <div className="relative max-w-xs w-full">
                  <input
                    type="text"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Search natural ingredients..."
                    value={searchInput}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                    aria-label="Search natural ingredients"
                  />
                  {searchInput && (
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 text-lg"
                      onClick={handleClearSearch}
                      aria-label="Clear search input"
                    >
                      ×
                    </button>
                  )}
                </div>
                <button
                  onClick={handleSearchSubmit}
                  className="p-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-label="Submit search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 py-2">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search natural ingredients..."
                value={query}
                onChange={handleSearchChange}
                aria-label="Search natural ingredients"
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
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link to="/" className="text-text-secondary hover:bg-primary-50 hover:text-primary-600 block rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/ingredients" className="text-text-secondary hover:bg-primary-50 hover:text-primary-600 block rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Ingredients
            </Link>
            <Link to="/login" className="text-text-secondary hover:bg-primary-50 hover:text-primary-600 block rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="text-text-secondary hover:bg-primary-50 hover:text-primary-600 block rounded-md px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavigationBar
