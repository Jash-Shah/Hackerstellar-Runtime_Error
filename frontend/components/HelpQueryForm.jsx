import React, { useState } from 'react';

const HelpQueryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!', name, email, query);
    // Reset form fields
    setName('');
    setEmail('');
    setQuery('');
  }

  return (
    <div className="m-auto w-full max-w-4xl p-4 bg-white-400 border rounded-lg sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">
          Name:
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email" className="block mb-2 mt-4">
          Email:
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="query" className="block mb-2 mt-4">
          Query:
          <textarea
            id="query"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HelpQueryForm;