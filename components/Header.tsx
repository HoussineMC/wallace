
import React from 'react';
import LocationIcon from './icons/LocationIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-md z-10 flex-shrink-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Wallace Restaurant</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <LocationIcon className="h-4 w-4 mr-1.5" />
            <span>0.8km away • New Capital, Chengdu</span>
          </div>
        </div>
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-red-700 transition-colors">
          To Store
        </button>
      </div>
    </header>
  );
};

export default Header;