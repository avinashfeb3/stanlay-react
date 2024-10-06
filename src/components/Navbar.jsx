import React from 'react'

const Navbar = () => {
    return (
      <nav className="bg-white shadow-md w-full">
        <div className="flex justify-between items-center p-4">
          <div className="text-lg font-bold">Dashboard</div>
          <div className="flex items-center">
            <div className="mr-4">Profile</div>
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>
      </nav>
    );
  };
export default Navbar;  