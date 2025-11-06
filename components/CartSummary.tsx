import React, { useMemo } from 'react';
import type { CartItem } from '../types';
import CartIcon from './icons/CartIcon';

interface CartSummaryProps {
  items: CartItem[];
  onOpenCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ items, onOpenCart }) => {
  const { totalItems, totalPrice } = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
  }, [items]);

  const hasItems = totalItems > 0;
  const barBgColor = "bg-[#2C2C38]";

  if (!hasItems) {
    return (
      <div className="fixed bottom-0 left-0 right-0 max-w-4xl mx-auto p-4 bg-transparent z-20 pointer-events-none">
        <div className={`flex items-center justify-between p-3 rounded-full bg-gray-200`}>
          <div className="flex items-center">
            <div className="relative bg-gray-400 p-3 rounded-full">
               <CartIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="font-semibold text-gray-500">Cart is empty</p>
            </div>
          </div>
          <button 
            disabled
            className="font-bold py-3 px-8 rounded-full bg-gray-300 text-gray-400 cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-4xl mx-auto p-4 bg-transparent z-20">
      <button
        onClick={onOpenCart}
        className={`w-full flex items-center justify-between p-2 pl-3 rounded-full ${barBgColor} text-white shadow-lg text-left`}
        aria-label={`Open cart with ${totalItems} items, total price ${totalPrice.toFixed(2)}`}
      >
        <div className="flex items-center flex-1">
          <div className="relative">
            <div className="absolute -inset-1 bg-yellow-400 transform -rotate-6 rounded-xl z-0"></div>
            <div className="relative bg-red-600 p-3 rounded-xl z-10">
                <CartIcon className="w-7 h-7 text-white" />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#2C2C38] z-20">
              {totalItems}
            </span>
          </div>
          <div className="ml-4 flex-1">
            <p className="font-bold text-xl">${totalPrice.toFixed(2)}</p>
            <p className="text-xs text-gray-300">Includes taxes & charges</p>
          </div>
        </div>
        <div 
          className="font-bold py-3 px-8 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex-shrink-0"
        >
          Checkout
        </div>
      </button>
    </div>
  );
};

export default CartSummary;