import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Container */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white h-full p-5 pt-8 duration-300 relative flex flex-col`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-9 w-7 h-7 bg-white text-slate-900 border border-slate-900 rounded-full flex items-center justify-center cursor-pointer shadow-md"
        >
          {isOpen ? '◄' : '►'}
        </button>

        {/* Header / Logo */}
        <div className="flex gap-x-4 items-center mb-8">
          <span className="text-2xl cursor-pointer">🚀</span>
          <h1
            className={`text-white font-medium text-xl origin-left duration-200 ${
              !isOpen && 'scale-0 hidden'
            }`}
          >
            App Brand
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="pt-6 space-y-2">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex rounded-md p-2 cursor-pointer hover:bg-slate-800 text-gray-300 text-sm items-center gap-x-4"
            >
              <span className="text-xl">{item.icon}</span>
              <span
                className={`${
                  !isOpen && 'hidden'
                } origin-left duration-200`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-7 text-2xl font-semibold">
        <h1>Main Content Area</h1>
        <p className="text-base text-gray-600 font-normal mt-2">
          The main page content scales automatically alongside the sidebar.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;