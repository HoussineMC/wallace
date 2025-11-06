
import React from 'react';
import type { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: Category['id'];
  onSelectCategory: (categoryId: Category['id']) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <nav className="w-24 md:w-32 bg-gray-100 overflow-y-auto flex-shrink-0">
      <ul className="py-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onSelectCategory(category.id)}
              className={`w-full text-left text-sm md:text-base p-3 md:p-4 transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-white text-red-500 font-bold'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;