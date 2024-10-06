import React, { useState, useEffect} from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import icons
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track the currently open dropdown
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  // Toggle dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown); // Close if the same dropdown is clicked again
  };
  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/'); // Redirect to login if not authenticated
    }
  }, [navigate]);
  const handleLogout = () => {
      // Clear authentication status
      localStorage.removeItem('isAuthenticated');
      navigate('/'); // Redirect to login after logout
    };
  return (
    <>
      <nav className={`bg-white dark:bg-gray-800 w-full`}>
        <div className="flex justify-end items-center p-4">
          {/* Navbar Right Section */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* Notification Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("notification")}
                className="text-gray-900 dark:text-white focus:outline-none"
              >
                🔔
              </button>
              {openDropdown === "notification" && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-10">
                  <div className="px-4 py-2">No new notifications</div>
                </div>
              )}
            </div>

            {/* Message Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("message")}
                className="text-gray-900 dark:text-white focus:outline-none"
              >
                💬
              </button>
              {openDropdown === "message" && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-10">
                  <div className="px-4 py-2">No new messages</div>
                </div>
              )}
            </div>

            {/* Profile Image and Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("profile")}
                className="flex items-center focus:outline-none"
              >
                <span className="ml-2 pr-3 text-gray-900 dark:text-white">
                  John Doe
                </span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="profile"
                  className="rounded-full w-10 h-10"
                />
                {/* Render Arrow Icon */}
                {openDropdown === "profile" ? (
                  <FiChevronUp className="ml-1 text-gray-900 dark:text-white" />
                ) : (
                  <FiChevronDown className="ml-1 text-gray-900 dark:text-white" />
                )}
              </button>
              {openDropdown === "profile" && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-900 dark:text-white"
                  >
                    My Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-900 dark:text-white"
                  >
                    My Account Settings
                  </a>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-900 dark:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
