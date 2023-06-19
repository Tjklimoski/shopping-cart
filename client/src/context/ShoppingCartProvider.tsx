import React, { ReactNode, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string
  qty: number
  price: number
}

type ShoppingCartContext = {
  shoppingCart: CartItem[],
  addOneToCart: (id: string, price: number) => void,
  removeOneFromCart: (id: string) => void,
  removeFromCart: (id: string) => void,
  openCart: () => void,
  closeCart: () => void,
  isOpen: boolean,
  cartTotal: number
}

const ShoppingCartContext = React.createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children } : ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useLocalStorage<CartItem[]>('ITEMS', []);
  const [isOpen, setIsOpen] = useState(false);
  const cartTotal = shoppingCart.reduce((cartTotal, cartItem) => {
      return cartTotal + cartItem.price * cartItem.qty;
    }, 0)

  function addOneToCart(id : string, price: number) {
    setShoppingCart(currentCart => {
      if (inCart(currentCart, id)) {
        return currentCart.map(item => {
          if (item.id === id) {
            const qty = item.qty + 1
            return {...item, qty };
          }
          return item;
        })
      } else {
        return [...currentCart, { id, qty: 1, price }]
      }
    })
  }

  function removeOneFromCart(id : string) {
    setShoppingCart(currentCart => {
      if (!inCart(currentCart, id)) return currentCart;

      const itemToRemoveFrom = currentCart.find(item => item.id === id);
      const qty = (itemToRemoveFrom?.qty || 0) - 1;

      if (qty > 0) {
        return currentCart.map(item => {
          if (item.id === id) return {...item, qty };
          return item;
        })
      } else {
        return currentCart.filter(item => item.id !== id);
      }

    })
  }

  function removeFromCart(id : string) {
    setShoppingCart(currentCart => {
      return currentCart.filter(item => item.id !== id);
    })
  }

  function openCart() {
    setIsOpen(true);    
  }

  function closeCart() {
    setIsOpen(false)
  }

  const value = {
    shoppingCart,
    addOneToCart,
    removeOneFromCart,
    removeFromCart,
    openCart,
    closeCart,
    isOpen,
    cartTotal
  }

  return (
    <ShoppingCartContext.Provider value={value} >
      {children}
    </ShoppingCartContext.Provider>
  )
}

function inCart(cart : CartItem[], id : string) {
  return cart.some(item => item.id === id);
}
