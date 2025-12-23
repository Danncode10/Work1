// Component tests for NavigationBar
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import NavigationBar from '../NavigationBar';
import filtersReducer from '../../store/slices/filtersSlice';

// Mock react-router-dom hooks
const mockNavigate = vi.fn();
const mockLocation = { pathname: '/' };

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
  };
});

// Create a test store
const createTestStore = () => {
  return configureStore({
    reducer: {
      filters: filtersReducer,
    },
  });
};

const renderWithProviders = (component) => {
  const store = createTestStore();
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('NavigationBar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the brand name', () => {
    renderWithProviders(<NavigationBar />);
    expect(screen.getByText('NutriFriendly')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithProviders(<NavigationBar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('renders search input and button on non-ingredients page', () => {
    mockLocation.pathname = '/';
    renderWithProviders(<NavigationBar />);
    expect(screen.getByPlaceholderText('Search natural ingredients...')).toBeInTheDocument();
    expect(screen.getByLabelText('Submit search')).toBeInTheDocument();
  });

  it('does not render search on ingredients page', () => {
    mockLocation.pathname = '/ingredients';
    renderWithProviders(<NavigationBar />);
    expect(screen.queryByPlaceholderText('Search natural ingredients...')).not.toBeInTheDocument();
  });

  it('handles search input change', () => {
    renderWithProviders(<NavigationBar />);
    const input = screen.getByPlaceholderText('Search natural ingredients...');
    fireEvent.change(input, { target: { value: 'ginger' } });
    expect(input.value).toBe('ginger');
  });

  it('handles search submit', () => {
    renderWithProviders(<NavigationBar />);
    const input = screen.getByPlaceholderText('Search natural ingredients...');
    const button = screen.getByLabelText('Submit search');

    fireEvent.change(input, { target: { value: 'ginger' } });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/ingredients');
  });

  it('handles Enter key press for search', () => {
    renderWithProviders(<NavigationBar />);
    const input = screen.getByPlaceholderText('Search natural ingredients...');

    fireEvent.change(input, { target: { value: 'ginger' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });

    expect(mockNavigate).toHaveBeenCalledWith('/ingredients');
  });

  it('handles clear search', () => {
    renderWithProviders(<NavigationBar />);
    const input = screen.getByPlaceholderText('Search natural ingredients...');

    fireEvent.change(input, { target: { value: 'ginger' } });
    const clearButton = screen.getByLabelText('Clear search input');
    fireEvent.click(clearButton);

    expect(input.value).toBe('');
  });

  it('toggles mobile menu', () => {
    renderWithProviders(<NavigationBar />);
    const menuButton = screen.getByLabelText('Open main menu');

    // Initially closed
    expect(screen.queryByText('Home')).not.toBeInTheDocument(); // Desktop links hidden on mobile

    fireEvent.click(menuButton);
    // After click, mobile menu should be open
    expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop and mobile
  });
});
