import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';
const App = () => {
    const [userRole, setUserRole] = useState(null);
    const [isTokenValid, setIsTokenValid] = useState(true);
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
                }
                else {
                    setUserRole(decoded.role); // Set the user role
                }
            }
            catch (error) {
                console.error("Invalid token:", error);
                setIsTokenValid(false);
            }
        }
        else {
            setIsTokenValid(false);
        }
    }, []);
    console.log("User Role:", userRole);
    console.log("Is Token Valid:", isTokenValid);
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/login", element: userRole ? _jsx(Navigate, { to: "/" }) : _jsx(LoginPage, {}) }), _jsx(Route, { path: "/signup", element: userRole ? _jsx(Navigate, { to: "/" }) : _jsx(SignUpPage, {}) }), _jsx(Route, { path: "/admin", element: userRole === 'admin' && isTokenValid ? (_jsx(AdminPage, {})) : (_jsx(Navigate, { to: "/" })) })] })] }));
};
export default App;
