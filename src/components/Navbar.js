import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;
    const username = decoded ? decoded.username : null;
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        navigate('/login'); // Redirect to login after logout
    };
    return (_jsx("nav", { className: "bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 p-4 shadow-lg", children: _jsxs("div", { className: "max-w-7xl mx-auto flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "text-white text-3xl font-semibold hover:text-yellow-200 transition-colors duration-300", children: "E-Commerce" }), _jsx("div", { className: "flex items-center space-x-6", children: token ? (_jsxs(_Fragment, { children: [_jsxs("span", { className: "text-white text-lg font-medium", children: ["Welcome, ", _jsx("span", { className: "font-bold", children: username })] }), _jsx("button", { onClick: handleLogout, className: "bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition-colors duration-300", children: "Logout" })] })) : (_jsxs(_Fragment, { children: [_jsx(Link, { to: "/login", className: "text-white text-lg hover:text-yellow-200 transition-colors duration-300", children: "Login" }), _jsx(Link, { to: "/signup", className: "text-white text-lg hover:text-yellow-200 transition-colors duration-300", children: "Sign Up" })] })) })] }) }));
};
export default Navbar;
