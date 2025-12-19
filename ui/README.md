# Natural Health Website System - Frontend

The frontend component of the Natural Health Website System, an educational platform for browsing and learning about natural ingredients. Built with React and modern web technologies, this application provides users with searchable access to detailed information about natural ingredients including benefits, nutrition facts, risks, warnings, dosage recommendations, and scientific references.

## What This Is

This is the React frontend for the Natural Health Website System, designed to provide:

- **Browse Ingredients**: View a comprehensive list of natural ingredients
- **Search Functionality**: Find ingredients by name or keyword
- **Detailed Information**: Access proven benefits, nutrition facts (including calories), risks & warnings, dosage, and research references
- **Optional Authentication**: User registration and login through AWS Cognito (optional for browsing)
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Educational Focus**: All information is sourced from reputable scientific and health organization references

The application connects to a FastAPI backend that serves ingredient data from a PostgreSQL database, with full-text search capabilities.

## Tech Stack

- **React 18.2.0** with **Vite 5.0.12** for fast development and building
- **Tailwind CSS 3.4.1** for utility-first styling
- **Bootstrap 5.3.3** (CSS-only) for responsive component classes
- **Redux Toolkit & React Redux** for state management
- **React Router** for client-side routing
- **Axios** for API communication with the FastAPI backend
- **clsx** for conditional CSS classes

## System Requirements

- Node.js 18.x (LTS) or later
- npm 9.x or later
- Running FastAPI backend server (see backend/README.md)

## Installation Guide

Follow these steps to set up the frontend:

```bash
# Navigate to the ui directory
cd ui

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local with your backend URL
# VITE_API_BASE_URL=http://localhost:8000/api

# Start the development server
npm run dev
```

**Important**: Ensure the FastAPI backend is running before starting the frontend. The backend provides the ingredient data and search functionality.

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Environment Variables

Create a `.env.local` file in the ui directory with:

```bash
VITE_API_BASE_URL=http://localhost:8000/api
```

This points to your local FastAPI backend. For production, update this to your deployed backend URL.

## Project Structure

```
ui/
├─ src/
│  ├─ components/          # Reusable UI components
│  │  ├─ ExampleButton.jsx # Generic button component
│  │  └─ ReduxCounter.jsx  # Demo counter component
│  ├─ pages/               # Page-level components
│  │  ├─ Home.jsx          # Home/dashboard page
│  │  └─ Ingredients.jsx   # Ingredient list page (future)
│  ├─ layouts/             # Layout components
│  │  └─ MainLayout.jsx    # Main app layout with navigation
│  ├─ services/            # API service functions
│  │  └─ api.js            # Axios configuration and API calls
│  ├─ store/               # Redux state management
│  │  ├─ index.js          # Redux store configuration
│  │  └─ slices/           # Redux slices
│  │     ├─ counterSlice.js # Demo counter slice
│  │     └─ ingredientsSlice.js # Ingredient data slice (future)
│  ├─ styles/              # Global styles
│  │  └─ index.css         # Tailwind CSS imports
│  ├─ App.jsx              # Main app component with routing
│  └─ main.jsx             # App entry point
├─ public/                 # Static assets
├─ .env.local              # Local environment variables
├─ .env.local.example      # Environment template
├─ .gitignore              # Git ignore rules
├─ .nvmrc                  # Node version specification
├─ package.json            # Dependencies and scripts
├─ requirements.txt        # System requirements
├─ tailwind.config.js      # Tailwind configuration
├─ postcss.config.js       # PostCSS configuration
├─ vite.config.js          # Vite configuration
└─ index.html              # HTML template
```

## Redux State Management

The application uses Redux Toolkit for managing application state, including ingredient data, search results, and user authentication status.

### Current Store Structure

- `store/index.js`: Main Redux store with counter slice
- `store/slices/counterSlice.js`: Example counter state management

### Future Slices (Planned)

- `ingredientsSlice.js`: Manage ingredient list, search results, and selected ingredient
- `authSlice.js`: Handle user authentication state

### Example Usage

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../store/slices/counterSlice'

function CounterComponent() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
```

## API Integration

The frontend communicates with the FastAPI backend through RESTful APIs:

- `GET /api/ingredients` - Retrieve paginated ingredient list
- `GET /api/ingredients/{id}` - Get specific ingredient details
- `POST /api/search` - Search ingredients with full-text search
- Authentication endpoints (future implementation)

API calls are handled in `src/services/api.js` using Axios with interceptors for error handling and authentication headers.

## Development Workflow

1. **Start Backend First**: Ensure FastAPI server is running on port 8000
2. **Start Frontend**: Run `npm run dev` in ui directory
3. **Develop Features**: Add components, pages, and API integrations
4. **Test Locally**: Verify functionality with backend APIs
5. **Build for Production**: Use `npm run build` for deployment

## Troubleshooting

### Common Issues

1. **Backend Connection Failed**
   - Ensure backend is running: `cd backend && poetry run dev`
   - Check VITE_API_BASE_URL in .env.local
   - Verify CORS settings in backend

2. **Build Errors**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check Node.js version: `node --version` (should be 18.x+)

3. **Styling Issues**
   - Ensure Tailwind CSS is imported in index.css
   - Check for conflicting Bootstrap/Tailwind classes

### Development Tips

- Use browser dev tools to inspect API calls
- Check browser console for React errors
- Test on multiple screen sizes for responsiveness
- Use Redux DevTools extension for state debugging

## Features in Development

- Ingredient browsing and search interface
- Detailed ingredient information pages
- User authentication (optional)
- Responsive mobile design
- Advanced search filters
- Data visualization for nutrition facts

## Contributing

This project follows standard React development practices. Please ensure:

- Components are reusable and well-documented
- State management follows Redux patterns
- API calls are handled in service files
- Styling uses Tailwind utilities with Bootstrap classes

## Medical Disclaimer

This platform provides educational information about natural ingredients and their general uses. It is not intended to diagnose, treat, cure, or prevent any disease. Users should consult qualified healthcare professionals for personalized medical advice, diagnosis, or treatment. The information presented is for informational purposes only and should not replace professional medical judgment.

## License

ISC
