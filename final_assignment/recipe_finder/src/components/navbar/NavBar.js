import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(user);
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-2 shadow-md sm:px-6">
      <div className="flex items-center">
        <p className="text-lg font-bold text-white">FlavorQuest</p>
      </div>
      <div className="flex items-center space-x-4">
        {isAuthenticated && (
          <img
            className="w-10 h-10 rounded-lg bg-gray-700"
            src={user.picture}
            alt={user.name}
          />
        )}
        {isAuthenticated ? (
          <button
            className="px-3 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-base"
            onClick={() => logout()}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-3 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-base"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
