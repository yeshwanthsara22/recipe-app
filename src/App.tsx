import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/loginpage/LoginPage";
import HomePage from "./components/homepage/HomePage";
import Recipes from "./components/recipes/Recipes";
import ContactUs from "./components/contactus/ContactUs";
import RecipeDetail from "./components/recipedetails/RecipeDetail";

// ProtectedRoute to ensure pages are only accessible with a valid token
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token"); // Check if token exists
  return token ? children : <Navigate to="/login" />; // Redirect to login if no token
};

// Redirect users who are logged in from accessing login page
const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/home" /> : children;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect to home if token exists when trying to access login */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes"
          element={
            <ProtectedRoute>
              <Recipes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <ProtectedRoute>
              <RecipeDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contactus"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />

        {/* Catch-all redirect to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
