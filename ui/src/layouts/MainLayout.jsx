import NavigationBar from '../components/NavigationBar'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral">
      <NavigationBar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-white shadow-sm mt-auto">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-text-secondary">
            © 2025 NutriFriendly. Educational information only.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
