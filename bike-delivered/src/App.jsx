import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/layout/Navbar';

// Feature pages (placeholder components)
const HomePage = React.lazy(() => import('./features/discovery/HomePage'));
const LoginPage = React.lazy(() => import('./features/auth/LoginPage'));
const SignupPage = React.lazy(() => import('./features/auth/SignupPage'));
const ProfilePage = React.lazy(() => import('./features/auth/ProfilePage'));
const RestaurantsPage = React.lazy(() => import('./features/discovery/RestaurantsPage'));
const CartPage = React.lazy(() => import('./features/ordering/CartPage'));
const OrdersPage = React.lazy(() => import('./features/ordering/OrdersPage'));
const TrackPage = React.lazy(() => import('./features/tracking/TrackPage'));

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Public route component (redirect if authenticated)
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <React.Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              
              {/* Auth Routes */}
              <Route 
                path="/login" 
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                } 
              />
              <Route 
                path="/signup" 
                element={
                  <PublicRoute>
                    <SignupPage />
                  </PublicRoute>
                } 
              />
              
              {/* Protected Routes */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/cart" 
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/orders" 
                element={
                  <ProtectedRoute>
                    <OrdersPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/track" 
                element={
                  <ProtectedRoute>
                    <TrackPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* 404 Route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
