
import React from 'react';
import type { MenuItem as MenuItemType } from '../types';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

interface MenuItemProps {
  item: MenuItemType;
  quantity: number;
  onUpdateQuantity: (item: MenuItemType, newQuantity: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, quantity, onUpdateQuantity }) => {
  return (
    <div className="flex p-4 border-b">
      <img src={item.image} alt={item.name} className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover flex-shrink-0" />
      <div className="ml-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
          {item.tags && (
             <div className="mt-2">
                {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold bg-red-100 text-red-800 px-2 py-1 rounded-full mr-2">{tag}</span>
                ))}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-gray-800">
            <span className="text-sm font-normal mr-0.5">$</span>{item.price.toFixed(2)}
          </p>
          
          <div className="flex items-center">
            {quantity > 0 && (
              <>
                <button
                  onClick={() => onUpdateQuantity(item, quantity - 1)}
                  className="p-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <MinusIcon className="w-5 h-5" />
                </button>
                <span className="font-bold text-lg px-2 text-gray-800" aria-live="polite">{quantity}</span>
              </>
            )}
            <button
              onClick={() => onUpdateQuantity(item, quantity + 1)}
              className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              aria-label={`Increase quantity of ${item.name}`}
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuItem;