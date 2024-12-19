import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            const token = response.data.token;
            // Log the token and decoded data for debugging
            console.log("Token received:", token);
            const decoded = JSON.parse(atob(token.split('.')[1]));
            console.log("Decoded Token:", decoded);
            // Store the token in localStorage
            localStorage.setItem('token', token);
            // Check if the role is admin and navigate accordingly
            if (decoded.role === 'admin') {
                navigate('/admin'); // Redirect to admin panel if admin
            }
            else {
                navigate('/'); // Redirect to home page for regular user
            }
        }
        catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || 'An error occurred during login.');
            }
            else {
                setError('An unknown error occurred.');
            }
        }
    };
    return (_jsx("div", { className: "bg-gray-100 min-h-screen", children: _jsxs("div", { className: "max-w-md mx-auto p-6 bg-white shadow-lg mt-8 rounded-lg", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Login" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Password" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: handleChange, required: true, className: "mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsx("button", { type: "submit", className: "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500", children: "Login" })] }), error && _jsx("p", { className: "text-red-500 text-center mt-4", children: error })] }) }));
};
export default LoginPage;
