import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log("Email Submitted: ", email);
      // You can add API integration to store the email in your database.
      setEmail('');
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Subscribe for Exciting Deals!</h2>
        <p className="text-lg text-white mb-8">
          Be the first to know about our special offers, exciting deals, and travel updates.
        </p>
        {submitted ? (
          <p className="text-white text-xl">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-white md:w-2/3 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              className="mt-4 md:mt-0 md:ml-4 bg-red-500 text-blue-500 hover:bg-red-600 px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-white"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
