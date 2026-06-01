import { createContext, useState, useContext, useEffect } from 'react';

// create context
const CartContext = createContext();

// Provider - global
export function CartProvider({ children }) {

  // Get data from local storage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  })

  // save data when cart item changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Lägg till produkt i korgen
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item._id === product._id);
      if (exists) {
        return prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    })
  }

  // remove from cart
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item._id !== productId))
  };

  // change quantity
  const updateQuantity = (productId, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === productId
          ? { ...item, quantity: item.quantity + amount }
          : item
      ).filter(item => item.quantity > 0)
    )
  };

// empty cart
const clearCart = () => {
  setCartItems([])
  localStorage.removeItem('cart')
};

  // calculate item price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  // calculate total price in cart 
  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      totalPrice,
      cartCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook
export function useCart() {
  return useContext(CartContext)
};