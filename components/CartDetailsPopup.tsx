import React from 'react';
import type { CartItem, MenuItem as MenuItemType } from '../types';
import TrashIcon from './icons/TrashIcon';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

interface CartDetailsPopupProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (item: MenuItemType, newQuantity: number) => void;
  onClearCart: () => void;
}

const CartDetailsPopup: React.FC<CartDetailsPopupProps> = ({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onClearCart,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-30 flex flex-col justify-end" 
      aria-labelledby="cart-popup-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Popup Panel */}
      <div className="relative bg-white rounded-t-2xl w-full max-w-4xl mx-auto transition-transform transform translate-y-0">
        <div className="p-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <h2 id="cart-popup-title" className="text-lg font-bold text-gray-800">Shopping Cart</h2>
            <button
              onClick={onClearCart}
              className="flex items-center text-sm text-gray-500 hover:text-gray-800"
            >
              <TrashIcon className="w-4 h-4 mr-1" />
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="overflow-y-auto max-h-[60vh] px-4 pb-4 no-scrollbar">
          {items.map(item => (
            <div key={item.id} className="flex items-center py-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
              <div className="ml-4 flex-grow">
                <p className="font-bold text-gray-800">{item.name}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-bold text-red-600">
                    <span className="text-sm font-normal mr-0.5">$</span>{item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <button
                      onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                      className="p-1.5 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <MinusIcon className="w-5 h-5" />
                    </button>
                    <span className="font-bold text-lg px-3 text-gray-800" aria-live="polite">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                      className="p-1.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDetailsPopup;