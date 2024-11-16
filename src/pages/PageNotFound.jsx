import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-3xl font-medium mt-4">Page Not Found</p>
      <p className="mt-2 text-lg">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Go Back to Homepage
      </button>
      <div className="mt-10 w-full max-w-lg">
        <img
          src="assets/PageNotFound/404.png"
          alt="Lost in Space"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
