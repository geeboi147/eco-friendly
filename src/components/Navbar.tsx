import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;
  const username = decoded ? decoded.username : null;

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-3xl font-semibold hover:text-yellow-200 transition-colors duration-300"
        >
          E-Commerce
        </Link>

        {/* Right Side Links */}
        <div className="flex items-center space-x-6">
          {/* If user is logged in */}
          {token ? (
            <>
              <span className="text-white text-lg font-medium">
                Welcome, <span className="font-bold">{username}</span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login Link */}
              <Link
                to="/login"
                className="text-white text-lg hover:text-yellow-200 transition-colors duration-300"
              >
                Login
              </Link>
              {/* Sign Up Link */}
              <Link
                to="/signup"
                className="text-white text-lg hover:text-yellow-200 transition-colors duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
