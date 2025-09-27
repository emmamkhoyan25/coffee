import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Ստանում ենք պահպանված զամբյուղը (եթե կա)
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Ամեն փոփոխությունից հետո պահում ենք զամբյուղը
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    if (!item || !item.id) {
      console.warn('Item must have an id:', item);
      return;
    }

    console.log('✅ Ավելացվում է զամբյուղ՝', item);
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    console.log('🗑 Ջնջվում է id-ով՝', id);
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
