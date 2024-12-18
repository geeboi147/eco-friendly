import React, { useState } from 'react';
import axios from 'axios';


const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Custom function to check if the error is an AxiosError
  const isAxiosError = (error: unknown): error is { response: { data: { message: string } } } => {
    return (error as { response?: { data?: { message?: string } } }).response?.data !== undefined;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccess(true);
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        const message = err.response.data.message || 'An error occurred during registration.';
        setError(message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  if (success) {
    return (
      <div className="text-center">
        <p className="text-green-500">Registration successful!</p>
        <p>
          <a href="/login" className="text-blue-500 hover:underline">Log in here</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
     
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg mt-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
