import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
const AdminPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // Custom utility to determine if an error is from Axios
    const isAxiosError = (error) => {
        return error.isAxiosError !== undefined;
    };
    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('You are not authorized to perform this action.');
                return;
            }
            await axios.post('http://localhost:5000/api/products/add', { name, description, price, imageUrl }, { headers: { Authorization: `Bearer ${token}` } });
            alert('Product added successfully');
            setName('');
            setDescription('');
            setPrice('');
            setImageUrl('');
        }
        catch (error) {
            if (isAxiosError(error)) {
                // Safely access the message from the error response
                console.error('Error adding product:', error.response?.data?.message || 'An error occurred');
            }
            else {
                console.error('An unexpected error occurred.');
            }
        }
    };
    return (_jsxs("form", { onSubmit: handleAddProduct, className: "p-4", children: [_jsx("h1", { className: "text-lg font-bold mb-4", children: "Admin Panel: Add Product" }), _jsx("input", { type: "text", placeholder: "Product Name", value: name, onChange: (e) => setName(e.target.value), className: "block w-full mb-2 p-2 border rounded" }), _jsx("input", { type: "text", placeholder: "Description", value: description, onChange: (e) => setDescription(e.target.value), className: "block w-full mb-2 p-2 border rounded" }), _jsx("input", { type: "number", placeholder: "Price", value: price, onChange: (e) => setPrice(e.target.value), className: "block w-full mb-2 p-2 border rounded" }), _jsx("input", { type: "text", placeholder: "Image URL", value: imageUrl, onChange: (e) => setImageUrl(e.target.value), className: "block w-full mb-2 p-2 border rounded" }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", children: "Add Product" })] }));
};
export default AdminPage;
