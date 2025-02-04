import React,{useState} from 'react';
import { signupUser } from '../api/authApi';
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      phone: "",
      password: "",
      role: 2000, // Default: user role
      address: "",
      businessName: "",
    });
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await signupUser(formData);
        alert(response.message);
        navigate("/login"); // Redirect to login after successful signup
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          >
            <option value="2000">User</option>
            <option value="3000">Customer</option>
          </select>
          {formData.role === "3000" && (
            <>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 mb-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
            </>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Signup
          </button>
        </form>
      </div>
    );
  };

export default Signup