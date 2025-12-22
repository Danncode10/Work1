import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Ingredients', href: '/ingredients', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Register', href: '/register', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Disclosure as="nav" className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                  NutriFriendly
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  item.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-white shadow-sm mt-auto">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-gray-500">
            © 2025 NutriFriendly. Educational information only.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
