'use client';

import { createContext, useContext } from 'react';
import useStoredList from '@/lib/useStoredList';

const WishlistContext = createContext(null);

export default function WishlistProvider({ children }) {
  const { items, setItems, ready } = useStoredList('modina-wishlist-v1');

  const toggle = (slug) => {
    setItems((prev) =>
      prev.includes(slug)
        ? prev.filter((entry) => entry !== slug)
        : [slug, ...prev]
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        mounted: ready,
        count: items.length,
        isSaved: (slug) => items.includes(slug),
        toggle,
        clear: () => setItems([]),
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist باید داخل WishlistProvider استفاده شود.');
  }
  return context;
}
