import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-white font-vazirmatn">
      <div className="w-full max-w-md p-8 space-y-6 bg-neutral-800 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <p className="text-gray-400 text-center">
          Join us! Create your account.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              placeholder="Your username"
              className="w-full px-4 py-2 mt-1 bg-neutral-700 text-white rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 bg-neutral-700 text-white rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 bg-neutral-700 text-white rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 bg-neutral-700 text-white rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-pink-500 hover:bg-pink-600 rounded-md text-white font-medium transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-pink-500 hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
