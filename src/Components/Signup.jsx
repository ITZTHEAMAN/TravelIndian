import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 text-black">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        <form>
          {isSignUp && (
            <div className="mb-4 ">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <FaUser className="text-gray-500 mr-2" />
                <input
                
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full outline-none text-white p-1"
                />
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
              
                type="email"
                id="email"
                placeholder="Enter your email"
                className=' text-white p-1 '
    
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
              
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full outline-none text-white p-1"
                required
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={toggleForm}
              className="text-blue-600 font-medium hover:underline"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
