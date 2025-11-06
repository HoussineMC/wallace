import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES, MENU_ITEMS } from './constants';
import type { Category, MenuItem as MenuItemType, CartItem } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuItem from './components/MenuItem';
import CartSummary from './components/CartSummary';
import CartDetailsPopup from './components/CartDetailsPopup';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category['id']>(CATEGORIES[0].id);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  const handleOpenCart = () => {
    if (cartItems.length > 0) {
      setIsCartOpen(true);
    }
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  
  const handleClearCart = () => {
    setCartItems([]);
    handleCloseCart();
  };

  const handleSelectCategory = (categoryId: Category['id']) => {
    setSelectedCategory(categoryId);
  };

  const handleUpdateQuantity = (item: MenuItemType, newQuantity: number) => {
    setCartItems(prevItems => {
      if (newQuantity <= 0) {
        const updatedItems = prevItems.filter(cartItem => cartItem.id !== item.id);
        if (updatedItems.length === 0) {
            handleCloseCart();
        }
        return updatedItems;
      }

      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

      if (!existingItem) {
        return [...prevItems, { ...item, quantity: 1 }];
      }

      return prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      );
    });
  };

  const displayedItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.categoryId === selectedCategory);
  }, [selectedCategory]);

  const cartItemsMap = useMemo(() => {
    return cartItems.reduce((map, item) => {
      map[item.id] = item.quantity;
      return map;
    }, {} as Record<number, number>);
  }, [cartItems]);


  return (
    <div className={`h-screen max-h-screen bg-gray-50 flex flex-col font-sans max-w-4xl mx-auto ${isCartOpen ? 'overflow-hidden' : ''}`}>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <main className="flex-1 overflow-y-auto bg-white pb-24 no-scrollbar">
          {/* Promotional Banner */}
          <div className="p-4">
            <img 
              src="https://picsum.photos/seed/promo/800/250" 
              alt="Special Offer" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Category Title */}
          <div className="px-4 py-2">
            <h2 className="text-2xl font-bold text-gray-800">{CATEGORIES.find(c => c.id === selectedCategory)?.name}</h2>
          </div>

          {/* Menu Items */}
          <div>
            {displayedItems.map(item => (
              <MenuItem 
                key={item.id} 
                item={item} 
                quantity={cartItemsMap[item.id] || 0}
                onUpdateQuantity={handleUpdateQuantity} 
              />
            ))}
          </div>
        </main>
      </div>
      <CartSummary items={cartItems} onOpenCart={handleOpenCart} />
      <CartDetailsPopup 
        isOpen={isCartOpen}
        items={cartItems}
        onClose={handleCloseCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default App;