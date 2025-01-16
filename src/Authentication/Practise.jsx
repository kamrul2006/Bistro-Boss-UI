import React, { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // You can replace this with actual authentication state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo/Website Name</div>
      
      <div className="flex items-center space-x-6">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/products" className="hover:text-gray-400">Products</a>

        {!isLoggedIn ? (
          <button 
            onClick={() => setIsLoggedIn(true)} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
          >
            Login / Register
          </button>
        ) : (
          <div className="relative">
            <img
              src="https://via.placeholder.com/40" // Replace with actual user profile picture
              alt="User Profile"
              className="rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <div className="px-4 py-2">{/* User's Name */} John Doe</div>
                <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
