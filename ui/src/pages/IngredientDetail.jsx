import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ingredientsApi } from '../services/api'

function IngredientDetail() {
  const { id } = useParams()
  const [ingredient, setIngredient] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchIngredient()
  }, [id])

  const fetchIngredient = async () => {
    try {
      setLoading(true)
      const response = await ingredientsApi.getIngredient(id)
      setIngredient(response.data)
    } catch (err) {
      setError('Failed to load ingredient details. Please try again later.')
      console.error('Error fetching ingredient:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p className="mt-2 text-text-secondary">Loading ingredient details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-error">
          <p>{error}</p>
          <Link to="/ingredients" className="mt-4 inline-block bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
            Back to Ingredients
          </Link>
        </div>
      </div>
    )
  }

  if (!ingredient) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-text-secondary">
          <p>Ingredient not found.</p>
          <Link to="/ingredients" className="mt-4 inline-block bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
            Back to Ingredients
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral via-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/ingredients"
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-600 hover:text-primary-800 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Ingredients
          </Link>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">
                {ingredient.name}
              </h1>
              <p className="text-text-secondary mt-1 text-base">Natural ingredient for health and wellness</p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                  Verified
                </span>
                <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                  Natural
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">Proven Benefits</h2>
          </div>
          {ingredient.benefits && ingredient.benefits.length > 0 ? (
            <div className="grid gap-3">
              {ingredient.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-100">
                  <span className="text-primary-500 mr-2 mt-1 text-base">✨</span>
                  <span className="text-text-secondary leading-relaxed text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-sm">No benefits information available.</p>
          )}
        </div>

        {/* Nutrition Facts Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-secondary-700 to-accent-600 bg-clip-text text-transparent">Nutrition Facts</h2>
          </div>
          {ingredient.nutrition_facts && Object.keys(ingredient.nutrition_facts).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(ingredient.nutrition_facts).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 px-3 bg-gradient-to-r from-neutral to-primary-50 rounded-lg border border-primary-100">
                  <span className="font-medium text-text-primary capitalize text-sm">{key.replace(/_/g, ' ')}</span>
                  <span className="text-secondary-700 font-semibold text-sm">{value}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-sm">No nutrition facts available.</p>
          )}
          {ingredient.calories && (
            <div className="mt-4 p-4 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl border border-primary-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary-700 flex items-center text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Calories
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">{ingredient.calories}</span>
              </div>
            </div>
          )}
        </div>

        {/* Risks & Warnings Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent">Risks & Warnings</h2>
          </div>
          {ingredient.risks && ingredient.risks.length > 0 ? (
            <div className="space-y-3">
              {ingredient.risks.map((risk, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800 font-medium">{risk}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-gradient-to-r from-green-50 to-primary-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-800 font-medium text-sm">No known risks or warnings for this ingredient.</p>
              </div>
            </div>
          )}
        </div>

        {/* Dosage Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-100 to-primary-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-accent-700 to-primary-600 bg-clip-text text-transparent">Dosage Information</h2>
          </div>
          {ingredient.dosage ? (
            <div className="p-4 bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg border border-accent-100">
              <p className="text-text-secondary leading-relaxed text-base">{ingredient.dosage}</p>
            </div>
          ) : (
            <p className="text-text-secondary text-sm">No dosage information available. Consult a healthcare professional.</p>
          )}
        </div>

        {/* References Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-neutral to-primary-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">Trusted Research Sources</h2>
          </div>
          {ingredient.references && ingredient.references.length > 0 ? (
            <div className="space-y-3">
              {ingredient.references.map((reference, index) => {
                // Clean up reference text and extract URL
                const cleanRef = reference.replace(/\[\(|\)\]/g, '').trim();
                const urlMatch = cleanRef.match(/https?:\/\/[^\s)]+/);
                const url = urlMatch ? urlMatch[0] : null;
                const displayText = url ? cleanRef.replace(url, '').replace(/\s*$/, '') || url : cleanRef;

                return (
                  <div key={index} className="flex items-start p-3 bg-gradient-to-r from-neutral to-primary-50 rounded-lg border border-primary-100 hover:shadow-md transition-shadow">
                    <span className="text-primary-500 mr-2 mt-1 flex-shrink-0 text-xs font-semibold bg-primary-100 rounded-full w-5 h-5 flex items-center justify-center">{index + 1}</span>
                    <div className="text-text-secondary text-sm leading-relaxed min-w-0 flex-1">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-colors break-all truncate block"
                          title={url}
                        >
                          {displayText || url}
                        </a>
                      ) : (
                        <span className="break-words">{displayText}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-text-secondary text-sm">No references available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default IngredientDetail
