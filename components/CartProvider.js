'use client';

import { createContext, useContext } from 'react';
import useStoredList from '@/lib/useStoredList';

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { items, setItems, ready } = useStoredList('modina-cart-v1');

  const addItem = (item) => {
    setItems((prev) => {
      const index = prev.findIndex(
        (entry) => entry.slug === item.slug && entry.size === item.size
      );
      if (index === -1) return [...prev, item];

      const next = [...prev];
      next[index] = { ...next[index], qty: next[index].qty + item.qty };
      return next;
    });
  };

  const removeItem = (slug, size) => {
    setItems((prev) =>
      prev.filter((entry) => !(entry.slug === slug && entry.size === size))
    );
  };

  const updateQty = (slug, size, qty) => {
    if (qty < 1) {
      removeItem(slug, size);
      return;
    }
    setItems((prev) =>
      prev.map((entry) =>
        entry.slug === slug && entry.size === size ? { ...entry, qty } : entry
      )
    );
  };

  const count = items.reduce((sum, entry) => sum + entry.qty, 0);
  const subtotal = items.reduce(
    (sum, entry) => sum + entry.price * entry.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        mounted: ready,
        addItem,
        removeItem,
        updateQty,
        clearCart: () => setItems([]),
        count,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart باید داخل CartProvider استفاده شود.');
  }
  return context;
}
