# React Stable Starter

A production-ready, beginner-friendly starter repository for building blank websites with React, Tailwind CSS, and Bootstrap. Designed for maximum compatibility, minimal install errors, and clean software engineering practices.

## What This Is

This starter provides a blank canvas for React applications, pre-configured with:
- React 18.2.0 with Vite 5.0.12 for fast development
- Tailwind CSS 3.4.1 for utility-first styling
- Bootstrap 5.3.3 (CSS-only) for component classes
- Redux Toolkit & React Redux for state management
- Essential libraries like React Router, Axios, and clsx

It's perfect for beginners who want to start coding immediately without wrestling with setup issues, and for experienced developers who need a reliable, stable foundation.

## Why This Starter?

- **Zero Peer Dependency Conflicts**: All packages are pinned to stable, compatible versions
- **No Experimental Features**: Uses proven, widely-supported technologies
- **Easy Cloning**: Works out of the box with minimal setup
- **Beginner-Proof**: Clear documentation and structure
- **Professional Quality**: Follows software engineering best practices

## System Requirements

- Node.js 18.x (LTS)
- npm 9.x or later

## Installation Guide

Follow these steps to set up your new project:

```bash
# Clone the repository
git clone https://github.com/Danncode10/Web-Starter-React.git ui

# Navigate to the project directory
cd my-project

# Remove the git history to start fresh
rm -rf .git

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Why `rm -rf .git`?** This removes the starter's git history, allowing you to initialize a fresh repository for your own project.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Troubleshooting

If installation fails:

1. Delete `node_modules` directory
2. Delete `package-lock.json`
3. Run `npm install` again

**Important Notes:**
- Do not mix npm with yarn or pnpm
- Ensure you have the correct Node.js version (18.x)
- Check that npm is updated to version 9.x or later

## Design Philosophy

### Version Stability
All package versions are pinned to specific, stable releases to prevent unexpected breaking changes. This ensures the starter remains reliable over time.

### No ESLint Included
ESLint is excluded to avoid configuration complexity for beginners. You can add it later when your project matures.

### Stability Over Features
This starter prioritizes compatibility and reliability over cutting-edge features. It's built with proven technologies that work consistently across different environments.

## Project Structure

```
react-stable-starter/
├─ src/
│  ├─ components/
│  │  ├─ ExampleButton.jsx    # Reusable button component
│  │  └─ ReduxCounter.jsx     # Demo component using Redux state
│  ├─ pages/
│  │  └─ Home.jsx             # Home page component
│  ├─ layouts/
│  │  └─ MainLayout.jsx       # Main layout wrapper
│  ├─ store/
│  │  ├─ index.js             # Main Redux store configuration
│  │  └─ slices/
│  │     └─ counterSlice.js   # Example Redux slice (counter)
│  ├─ styles/
│  │  └─ index.css            # Global styles with Tailwind
│  ├─ App.jsx                 # Main app component
│  └─ main.jsx                # Entry point with Redux Provider
├─ public/                    # Static assets
├─ .env.example               # Environment variables template
├─ .gitignore                 # Git ignore rules
├─ .nvmrc                     # Node version specification
├─ package.json               # Dependencies and scripts
├─ requirements.txt           # System requirements
├─ tailwind.config.js         # Tailwind configuration
├─ postcss.config.js          # PostCSS configuration
├─ vite.config.js             # Vite configuration
└─ index.html                 # HTML template
```

## Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Available variables:
- `VITE_APP_NAME`: Your application name
- `VITE_API_BASE_URL`: API base URL for development

## Getting Started with Development

1. **Add New Pages**: Create components in `src/pages/` and add routes in `src/App.jsx`
2. **Create Components**: Use `src/components/` for reusable UI elements
3. **Styling**: Combine Tailwind utilities with Bootstrap classes as needed
4. **API Calls**: Use Axios for HTTP requests (already included)

## Redux State Management

This starter comes pre-configured with Redux Toolkit and React Redux for efficient state management.

### Store Structure

The Redux store is located in `src/store/`:
- `store/index.js` - Main store configuration using `configureStore`
- `store/slices/` - Directory for Redux slices (reducers + actions)

### Example Usage

Here's how to use Redux in your components:

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/slices/counterSlice'

function MyComponent() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}
```

### Creating New Slices

To add new state management features, create new slice files in `src/store/slices/`:

```javascript
// src/store/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    clearUser: (state) => {
      state.name = ''
      state.email = ''
    }
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
```

Then add it to your store in `src/store/index.js`:

```javascript
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})
```

## Contributing

This is a starter template. Feel free to fork and customize for your needs.

## License

ISC
