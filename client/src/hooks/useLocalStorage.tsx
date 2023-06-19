import { useEffect, useState } from 'react';

const prefix = 'shopping_cart_app_'

export default function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const LSKey = prefix + key;
  const [value, setValue] = useState<T>(() => {
    const data = localStorage.getItem(LSKey);
    if (data != null) return JSON.parse(data)

    if (initialValue instanceof Function) {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(LSKey, JSON.stringify(value))
  }, [LSKey, value])

  return [value, setValue] as [T, typeof setValue];
}
