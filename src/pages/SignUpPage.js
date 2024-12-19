import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // Custom function to check if the error is an AxiosError
    const isAxiosError = (error) => {
        return error.response?.data !== undefined;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            setSuccess(true);
        }
        catch (err) {
            if (isAxiosError(err)) {
                const message = err.response.data.message || 'An error occurred during registration.';
                setError(message);
            }
            else {
                setError('An unexpected error occurred.');
            }
        }
    };
    if (success) {
        return (_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-green-500", children: "Registration successful!" }), _jsxs("p", { children: [_jsx("a", { href: "/login", className: "text-blue-500 hover:underline", children: "Log in here" }), "."] })] }));
    }
    return (_jsx("div", { className: "bg-gray-100 min-h-screen", children: _jsxs("div", { className: "max-w-md mx-auto p-6 bg-white shadow-lg mt-8 rounded-lg", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Sign Up" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-semibold", children: "Username" }), _jsx("input", { type: "text", name: "username", value: formData.username, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-semibold", children: "Email" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-semibold", children: "Password" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })] }), _jsx("button", { type: "submit", className: "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500", children: "Sign Up" })] }), error && _jsx("p", { className: "text-red-500 text-center mt-4", children: error })] }) }));
};
export default SignUpPage;
