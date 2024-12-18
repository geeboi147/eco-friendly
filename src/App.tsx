import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';

const App = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isTokenValid, setIsTokenValid] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token);

    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        console.log("Decoded Token:", decoded);
        
        const exp = decoded.exp * 1000;
        const currentTime = Date.now();
        
        if (exp < currentTime) {
          setIsTokenValid(false);
        } else {
          setUserRole(decoded.role); // Set the user role
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setIsTokenValid(false);
      }
    } else {
      setIsTokenValid(false);
    }
  }, []);

  console.log("User Role:", userRole);
  console.log("Is Token Valid:", isTokenValid);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={userRole ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={userRole ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          path="/admin"
          element={
            userRole === 'admin' && isTokenValid ? (
              <AdminPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
