import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();  // Initialize navigate function

  const GoToHomepage = () => {
    navigate('/Homepage');  // Navigate to homepage
  };

  const GoToLogin = () => {
    navigate('/login');  // Navigate to login page
  };

  const [searchQuery, setSearchQuery] = useState('');

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle input focus/blur
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.classList.add('border-blue-500');
    event.target.classList.remove('border-gray-300');
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.classList.remove('border-blue-500');
    event.target.classList.add('border-gray-300');
  };

  return (
    <header className="w-full border-b-[1px] border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
          <img
            src="/images/Logomark.png"
            alt="Logo"
            className="mr-4 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          />
          <h1 className="text-base text-gray-400 transition-all duration-500 ease-in-out hover:text-gray-300 hover:scale-110 hover:shadow-xl">
            Ecommerce
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 items-center">
          <a
            href="#home"
            className="hover:text-gray-300 text-xs text-gray-400 transition-all duration-500 delay-100 hover:scale-110 hover:shadow-xl"
            onClick={GoToHomepage}
          >
            Home
          </a>

          {/* Dropdown Menu */}
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-10 py-1.5 px-3 text-xs shadow-inner shadow-white/10 hover:text-gray-300 text-gray-400 transition-all duration-500 delay-100 hover:scale-105">
              Categories
              <ChevronDownIcon className="w-4 h-4 transition-all duration-500 ease-in-out hover:scale-105" />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-gray-100' : ''} group flex items-center w-full px-4 py-2 text-gray-700 text-xs transition-all duration-500 ease-in-out`}
                  >
                    <PencilIcon className="w-5 h-5 mr-2 text-gray-500 transition-all duration-500 ease-in-out hover:scale-105" />
                    Edit
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-gray-100' : ''} group flex items-center w-full px-4 py-2 text-gray-700 text-xs transition-all duration-500 ease-in-out`}
                  >
                    <Square2StackIcon className="w-5 h-5 mr-2 text-gray-500 transition-all duration-500 ease-in-out hover:scale-105" />
                    Duplicate
                  </button>
                )}
              </MenuItem>
              <div className="border-t border-gray-200 my-1" />
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-gray-100' : ''} group flex items-center w-full px-4 py-2 text-gray-700 text-xs transition-all duration-500 ease-in-out`}
                  >
                    <ArchiveBoxXMarkIcon className="w-5 h-5 mr-2 text-gray-500 transition-all duration-500 ease-in-out hover:scale-105" />
                    Archive
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-gray-100' : ''} group flex items-center w-full px-4 py-2 text-gray-700 text-xs transition-all duration-500 ease-in-out`}
                  >
                    <TrashIcon className="w-5 h-5 mr-2 text-gray-500 transition-all duration-500 ease-in-out hover:scale-105" />
                    Delete
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>

          <a
            href="#about"
            className="hover:text-gray-300 text-xs text-gray-400 transition-all duration-500 delay-100 hover:scale-110 hover:shadow-xl"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 text-xs text-gray-400 transition-all duration-500 delay-100 hover:scale-110 hover:shadow-xl"
          >
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative flex items-center gap-4 ml-3 transition-all duration-500 ease-in-out hover:scale-105">
          <img
            src="/images/Search.png"
            alt="Search Icon"
            className="absolute left-3 w-4 h-4 transition-all duration-500 ease-in-out hover:scale-105"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search products"
            className="p-1 pl-10 rounded text-xs border border-gray-300 focus:outline-none transition-all duration-500 ease-in-out"
          />
        </div>

        {/* Log In Button */}
        <button
          onClick={GoToLogin}  // Added onClick to navigate to the login page
          className="px-6 py-2 rounded-md text-xs bg-[#0E1422] text-white flex items-center justify-center text-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
        >
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
