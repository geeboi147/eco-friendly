import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

const AdminPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  // Custom utility to determine if an error is from Axios
  const isAxiosError = (error: unknown): error is AxiosError<{ message: string }> => {
    return (error as AxiosError).isAxiosError !== undefined;
  };

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('You are not authorized to perform this action.');
        return;
      }

      await axios.post(
        'http://localhost:5000/api/products/add',
        { name, description, price, imageUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Product added successfully');
      setName('');
      setDescription('');
      setPrice('');
      setImageUrl('');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        // Safely access the message from the error response
        console.error('Error adding product:', error.response?.data?.message || 'An error occurred');
      } else {
        console.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <form onSubmit={handleAddProduct} className="p-4">
      <h1 className="text-lg font-bold mb-4">Admin Panel: Add Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
};

export default AdminPage;
