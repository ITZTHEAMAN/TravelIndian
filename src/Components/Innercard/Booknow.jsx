import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booknow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="max-w-md h-screen mx-auto text-black bg-white pt-[100px] shadow-lg rounded-lg p-6">
      {!submitted ? (
        <form  className='text-white' onSubmit={handleSubmit}>
          <h2  className="text-2xl font-bold mb-4">Customer Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Book Now
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-500 mb-4">
            Details submitted, our team will contact you soon.
          </h2>
          <button
            onClick={goBack}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Booknow;
