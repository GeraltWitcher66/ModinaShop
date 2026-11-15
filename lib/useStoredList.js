'use client';

import { useEffect, useState } from 'react';

/**
 * یک فهرست را در localStorage نگه می‌دارد و پیش از خواندن داده،
 * وضعیت «آماده» را false نگه می‌دارد تا هیدریشن یکسان بماند.
 */
export default function useStoredList(key) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* دادهٔ ذخیره‌شده قابل خواندن نبود */
    }
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(items));
    } catch {
      /* ذخیره‌سازی محلی در دسترس نیست */
    }
  }, [key, items, ready]);

  return { items, setItems, ready };
}
